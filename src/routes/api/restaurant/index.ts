import express from 'express'
import * as uuid from 'uuid'
import { CreateRestaurant } from '../../../types'

const router = express.Router()

module.exports = () => {
  router.get('/', (req,res) => {
    res.json({ message: 'restaurant' })
  })

  router.post('/create', (req,res) => {
    const { name, password, menu, tables }: CreateRestaurant = req.body
    const restaurantId = uuid.v4()
    // TODO create new restaurant on firestore
    // hash password
    const newTables = Array(tables).map((_,i) => ({ qr: `${process.env.DOMAIN}/${restaurantId}/${i + 1}` }))
    res.json({ name, password, menu, tables: newTables })
  })

  router.get('/menu', (req,res) => {
    const { restaurantId } = req.body
    // TODO get menu items from documenu with restaurantId from client
    res.json({ menuItems: ['Steak', 'Burger', 'Fries'] })
  })

  return router
}
