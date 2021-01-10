import express from 'express'
import * as uuid from 'uuid'
import * as bcrypt from 'bcrypt'
import { CreateRestaurant } from '../../../types'

const router = express.Router()

module.exports = (database) => {
  router.get('/', (req,res) => {
    res.json({ message: 'restaurant' })
  })

  router.post('/create', async (req,res) => {
    const restaurantData: CreateRestaurant = req.body
    const restaurantId = uuid.v4()
    const password = await bcrypt.hash(restaurantData.password, await bcrypt.genSalt(10))
    const tables = [...Array(restaurantData.tables)].map((_,i) => ({ qr: `${process.env.DOMAIN}/${restaurantId}/${i + 1}` }))

    const result = await database.createRestaurant({
      ...restaurantData,
      generatedId: restaurantId,
      password,
      tables
    })

    res.json(result)
  })

  router.get('/menu', (req,res) => {
    const { restaurantId } = req.body
    // TODO get menu items from documenu with restaurantId from client
    res.json({ menuItems: ['Steak', 'Burger', 'Fries'] })
  })

  return router
}
