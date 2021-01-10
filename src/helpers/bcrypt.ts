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
export const compare = (password : string , password_hash : string) : Promise<any> => {
    return new Promise((resolve , reject) => {
        bcryptCompare(password, password_hash, function(err : Error, result : any) {
           if(err){
               reject(err)
            }else if(!result){
                reject(new Error('Incorrect password'))
            }
            resolve(result)
        });
    })
}