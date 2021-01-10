"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurantInfo = void 0;
require('dotenv').config();
const Documenu = require('documenu');
Documenu.configure(process.env['DOCUMENU']);
const getRestaurantInfo = async (id) => {
    return await Documenu.Restaurants.get(id);
};
exports.getRestaurantInfo = getRestaurantInfo;
