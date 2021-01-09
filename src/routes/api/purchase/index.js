const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/', (req,res) => {
    res.json({ message: 'Test purchase route' })
  })

  router.post('/', (req,res) => {
    // TODO connect to Stripe API
    const data = req.body
    res.json({ message: 'Purchase successful' })
  })

  return router
}
