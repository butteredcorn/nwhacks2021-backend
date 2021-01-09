const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/', (req,res) => {
    res.json({ message: 'restaurant' })
  })

  router.post('/create', (req,res) => {
    // TODO create new restaurant on firestore
    const data = req.body
    res.json({ message: 'Created a new restaurant' })
  })

  router.get('/menu', (req,res) => {
    // TODO get menu items from firestore
    res.json({ menuItems: ['Steak', 'Burger', 'Fries'] })
  })

  return router
}
