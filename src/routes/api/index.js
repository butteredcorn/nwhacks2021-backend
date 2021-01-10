const express = require('express')
const router = express.Router()
const restaurantRoute = require('./restaurant')()
const purchaseRoute = require('./purchase')()

module.exports = (database) => {
  router.get('/', async (req,res) => {
    // '70c9e0dd-c7c1-4cbf-8d6c-ec85523b1239'
    const restaurant = await database.getRestaurants()
    res.json(restaurant)
  })

  router.get('/:uuid' ,async (req,res) => {
    const databaseId = req.params.uuid
    if (databaseId) {
      const restaurant = await database.getRestaurants(databaseId)
      res.json(restaurant)
    } else {
      res.status(403).json({Error : 'Restaurant id missing.'})
    }
  })

  router.use('/restaurant', restaurantRoute)
  router.use('/purchase', purchaseRoute)

  return router
}
