"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid = __importStar(require("uuid"));
const documenu_1 = require("../../../helpers/documenu");
const extractItems_1 = require("../../../helpers/extractItems");
const createQrBatch_1 = require("../../../helpers/createQrBatch");
const router = express_1.default.Router();
function restaurantRoute(database) {
    router.get('/', (req, res) => {
        res.json({ message: 'restaurant' });
    });
    router.post('/create', async (req, res) => {
        const restaurantData = req.body;
        const documenuId = restaurantData.documenuId;
        const resturantInfo = await documenu_1.getRestaurantInfo(documenuId);
        const restaurantId = uuid.v4();
        const tables = [...Array(restaurantData.tables)].map((_, i) => ({ qr: `${process.env.DOMAIN}/${restaurantId}/${i + 1}` }));
        const menu = extractItems_1.extractItems(resturantInfo.result.menus);
        const newRestaurant = {
            name: resturantInfo.result.restaurant_name,
            password: restaurantData.password,
            tables,
            menu,
            generatedId: restaurantId
        };
        await database.createRestaurant(newRestaurant);
        delete newRestaurant.password;
        const qrCodes = await createQrBatch_1.createQrBath(tables);
        const tablesQr = qrCodes.map(item => ({ qr: item }));
        newRestaurant.tables = tablesQr;
        res.json(newRestaurant);
    });
    router.get('/menu', (req, res) => {
        const { restaurantId } = req.body;
        res.json({ menuItems: ['Steak', 'Burger', 'Fries'] });
    });
    return router;
}
exports.default = restaurantRoute;
