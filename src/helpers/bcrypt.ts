import {hash as bcryptHash , compare as bcryptCompare}  from 'bcrypt'
export const hash = (password : string) : Promise<string> => {
    return new Promise((resolve,reject) => {
        bcryptHash(password, 10, function(err : Error, hash : string) {
            if(err){
                reject(err)
            }
            resolve(hash)
        });
    })
}
export const compare = async (password : string , password_hash : string) : Promise<boolean> => {
    return bcryptCompare(password, password_hash)
}