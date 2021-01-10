"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQrBath = void 0;
const createQr_1 = require("./createQr");
function createQrBath(tables) {
    const codes = [];
    for (const url of tables) {
        codes.push(createQr_1.createQr(url.qr));
    }
    return Promise.all(codes);
}
exports.createQrBath = createQrBath;
