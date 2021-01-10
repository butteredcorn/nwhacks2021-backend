"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("../helpers/bcrypt");
const path = require('path');
require('dotenv').config();
class Database {
    constructor() {
        this.admin = require("firebase-admin");
        var serviceAccount = require(path.join('../../', process.env.FIREBASE_CONFIG));
        this.admin.initializeApp({
            credential: this.admin.credential.cert(serviceAccount),
        });
        this.db = this.admin.firestore();
    }
    async getRestaurants(generatedId) {
        const snapshot = await this.db.collection('restaurants').where('generatedId', '==', generatedId).limit(1).get();
        const items = [];
        snapshot.forEach((doc) => {
            const restaurant = doc.data();
            delete restaurant.password;
            items.push(restaurant);
        });
        return await Promise.all(items);
    }
    async createRestaurant(restaurant) {
        const password = await bcrypt_1.hash(restaurant.password);
        return this.db.collection('restaurants').add({
            ...restaurant,
            password
        });
    }
    async getOrder(id) {
        return new Promise((resolve, reject) => {
            const result = this.db.collection('orders').doc(id).get();
            return result.then(snapshot => {
                resolve(snapshot.data());
            })
                .catch(reject);
        });
    }
}
const db = new Database();
exports.default = db;
