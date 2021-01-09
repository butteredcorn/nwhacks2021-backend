const express = require('express')
const router = express.Router()
const restaurantRoute = require('./restaurant')()
const purchaseRoute = require('./purchase')()

module.exports = () => {
    router.get('/' ,(req,res) => {
        res.json('hello')
    })

    router.use('/restaurant', restaurantRoute)
    router.use('/purchase', purchaseRoute)

    return router
}
