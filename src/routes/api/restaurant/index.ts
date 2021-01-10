import express from 'express'
import * as uuid from 'uuid'
import { CreateRestaurantDto , CreateRestaurant, PlaceOrder, Table, RestaurantAuth, CompleteOrder } from '../../../types'
import { getRestaurantInfo } from '../../../helpers/documenu'
import { extractItems } from '../../../helpers/extractItems'
import { createQrBath } from '../../../helpers/createQrBatch'
import { compare } from '../../../helpers/bcrypt'

const router = express.Router()

export default function restaurantRoute (database){
  router.get('/', (req,res) => {
    res.json({ message: 'restaurant' })
  })

  router.get('/:uuid' ,async (req,res) => {
    const databaseId = req.params.uuid
    if (databaseId) {
      const restaurant = await database.getRestaurant(databaseId)
      res.json(restaurant)
    } else {
      res.status(403).json({Error : 'Restaurant id missing.'})
    }
  })

  router.post('/create', async (req,res) => {
    const restaurantData: CreateRestaurantDto = req.body
    const documenuId = restaurantData.documenuId 
    const resturantInfo = await getRestaurantInfo(documenuId)
    const restaurantId = uuid.v4()
    const tables : Table[] = [...Array(restaurantData.tables)].map((_,i) => ({ qr: `${restaurantId}/${i + 1}` , restaurantId  , tableNumber : i+1 }))
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

  router.post('/:restaurantId/orders', async (req,res) => {
    const { restaurantId } = req.params
    const { password }: RestaurantAuth = req.body
    const [{ password: passwordHash }] = await database.getRestaurant(restaurantId, true)

    const verified = await compare(password, passwordHash)

    if (verified) {
      const orders = await database.getOrders(restaurantId)
      res.json(orders)
    }
    else {
      res.status(401).end()
    }
  })

  router.post('/:restaurantId/:orderId/complete-order', async (req,res) => {
    const { restaurantId, orderId } = req.params
    const { password }: RestaurantAuth = req.body
    const [{ password: passwordHash }] = await database.getRestaurant(restaurantId, true)

    const verified = await compare(password, passwordHash)

    if (verified) {
      const completeTime = await database.completeOrder({ orderId })
      res.json({ completeTime })
    }
    else {
      res.status(401).end()
    }
  })

  return router
}
