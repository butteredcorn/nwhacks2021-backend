"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQr = void 0;
const QRCode = require("qrcode");
function createQr(text) {
    return new Promise((resolve, reject) => {
        QRCode.toDataURL(text, function (err, url) {
            if (err) {
                reject(err);
            }
            resolve(url);
        });
    });
}
exports.createQr = createQr;
