import express from 'express'
import * as uuid from 'uuid'
import { CreateRestaurantDto , CreateRestaurant, PlaceOrder, Table } from '../../../types'
import { getRestaurantInfo } from '../../../helpers/documenu'
import { extractItems } from '../../../helpers/extractItems'
import { createQrBath } from '../../../helpers/createQrBatch'

const router = express.Router()

export default function restaurantRoute (database){
  router.get('/', (req,res) => {
    res.json({ message: 'restaurant' })
  })

  router.post('/create', async (req,res) => {
    const restaurantData: CreateRestaurantDto = req.body
    const documenuId = restaurantData.documenuId 
    const resturantInfo = await getRestaurantInfo(documenuId)
    const restaurantId = uuid.v4()
    const tables = [...Array(restaurantData.tables)].map((_,i) => ({ qr: `${process.env.DOMAIN}/${restaurantId}/${i + 1}` }))
    const menu = extractItems(resturantInfo.result.menus)

    const newRestaurant : CreateRestaurant = {
      name : resturantInfo.result.restaurant_name,
      password : restaurantData.password,
      tables,
      menu,
      generatedId : restaurantId
    }

    await database.createRestaurant(newRestaurant)
    delete newRestaurant.password

    const qrCodes = await createQrBath(tables)

    const tablesQr : Table[] = qrCodes.map(item => ({qr : item}))
    

    newRestaurant.tables = tablesQr

    res.json(newRestaurant)
  })

  router.post('/:restaurantId/:tableId/place-order', async (req,res) => {
    const { restaurantId, tableId } = req.params
    const { items }: PlaceOrder = req.body

    const orderId = await database.placeOrder({ restaurantId, tableId, items })

    res.json({ orderId })
  })

  router.get('/:restaurantId/orders', async (req,res) => {
    const { restaurantId } = req.params

    const orders = await database.getOrders(restaurantId)

    res.json(orders)
  })

  router.patch('/:orderId/complete-order', async (req,res) => {
    const { orderId } = req.params

    const completeTime = await database.completeOrder({ orderId })

    res.json({ completeTime })
  })

  return router
}
