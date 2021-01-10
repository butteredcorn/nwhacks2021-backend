import QRCode = require('qrcode');

export function createQr(text) : Promise<string>{
    return new Promise((resolve , reject) => {
        QRCode.toDataURL(text, function (err, url) {
            if(err){
                reject(err)
            }
            resolve(url)
        });
    })
}