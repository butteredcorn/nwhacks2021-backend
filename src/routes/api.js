const express = require('express')
const router = express.Router()

module.exports = (database) => {
    router.get('/' ,async (req,res) => {
        // '70c9e0dd-c7c1-4cbf-8d6c-ec85523b1239'
        const restaurant = await database.getRestaurants()
        res.json(restaurant)
    })
   

    return router
};