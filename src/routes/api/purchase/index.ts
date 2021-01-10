import express from 'express'
import { createQr } from '../../../helpers/createQr'
import { createStripeSession } from '../../../helpers/stripe'
import { GetPaymentIdDto , PaymentComplete } from '../../../types'

const router = express.Router()

export default (database) => {
  router.get('/', (req,res) => {
    res.json({ message: 'Test purchase route' })
  })

  router.post('/', async (req,res) => {
    const orderInfo : GetPaymentIdDto = req.body
    if(orderInfo){
      const order = await database.getOrder(orderInfo.orderId)
      const total = Math.ceil(order.total)
      const restaurantName = (await (await order.restaurant.get()).data()).name
      
      const session = await createStripeSession(total , restaurantName)

      res.json({id : session.id})

    }else{
      res.status(403).json({error : 'Order Id is missing.'})
    }
  })

  router.post('/completed' , async (req , res) => {
    const paymentInfo : PaymentComplete = req.body
    
    if(paymentInfo.orderId){
      if(paymentInfo.isPaid){
        database.paidOrder({orderId : paymentInfo.orderId})
        res.status(200).json()
      }else{
        res.status(200).json()
      }
    }

    res.status(403).json()

  })

  return router
}
