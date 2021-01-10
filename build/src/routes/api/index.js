"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_1 = __importDefault(require("./restaurant"));
const purchase_1 = __importDefault(require("./purchase"));
const router = express_1.default.Router();
module.exports = (database) => {
    router.get('/', async (req, res) => {
        const restaurant = await database.getRestaurants();
        res.json(restaurant);
    });
    router.get('/:uuid', async (req, res) => {
        const databaseId = req.params.uuid;
        if (databaseId) {
            const restaurant = await database.getRestaurants(databaseId);
            res.json(restaurant);
        }
        else {
            res.status(403).json({ Error: 'Restaurant id missing.' });
        }
    });
    router.use('/restaurant', restaurant_1.default(database));
    router.use('/purchase', purchase_1.default(database));
    return router;
};
