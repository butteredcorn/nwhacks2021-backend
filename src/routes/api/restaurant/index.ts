import express from 'express'
import { CreateRestaurant } from '../../../types'

const router = express.Router()

module.exports = () => {
  router.get('/', (req,res) => {
    res.json({ message: 'restaurant' })
  })

  router.post('/create', (req,res) => {
    const { name, password, menu, tables }: CreateRestaurant = req.body
    // TODO create new restaurant on firestore
    res.json({ name, password, menu, tables })
  })

  router.get('/menu', (req,res) => {
    // TODO get menu items from firestore
    res.json({ menuItems: ['Steak', 'Burger', 'Fries'] })
  })

  return router
}
