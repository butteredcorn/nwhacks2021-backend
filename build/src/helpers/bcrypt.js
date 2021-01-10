"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt_1 = require("bcrypt");
const hash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt_1.hash(password, 10, function (err, hash) {
            if (err) {
                reject(err);
            }
            resolve(hash);
        });
    });
};
exports.hash = hash;
const compare = (password, password_hash) => {
    return new Promise((resolve, reject) => {
        bcrypt_1.compare(password, password_hash, function (err, result) {
            if (err) {
                reject(err);
            }
            else if (!result) {
                reject(new Error('Incorrect password'));
            }
            resolve(result);
        });
    });
};
exports.compare = compare;
