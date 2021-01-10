"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = require("../../../helpers/stripe");
const router = express_1.default.Router();
exports.default = (database) => {
    router.get('/', (req, res) => {
        res.json({ message: 'Test purchase route' });
    });
    router.post('/', async (req, res) => {
        const orderInfo = req.body;
        if (orderInfo) {
            const order = await database.getOrder(orderInfo.orderId);
            const total = Math.ceil(order.total);
            const restaurantName = (await (await order.restaurant.get()).data()).name;
            const session = await stripe_1.createStripeSession(total, restaurantName);
            res.json({ id: session.id });
        }
        else {
            res.status(403).json({ error: 'Order Id is missing.' });
        }
    });
    return router;
};
