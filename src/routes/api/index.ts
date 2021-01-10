import express from 'express'
import restaurantRoute from './restaurant'
import purchaseRoute from './purchase'

const router = express.Router()

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

  router.use('/restaurant', restaurantRoute(database))
  router.use('/purchase', purchaseRoute(database))

  return router
}
