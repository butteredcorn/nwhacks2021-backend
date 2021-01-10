const express = require('express')
const router = express.Router()

module.exports = (database) => {
    router.get('/:uuid' ,async (req,res) => {
        const databaseId = req.params.uuid
        if(databaseId){
            const restaurant = await database.getRestaurants(databaseId)
            res.json(restaurant)
        }else{
            res.status(403).json({Error : 'Restaurant id missing.'})
        }
    })
   

    return router
};