import express from 'express'
import * as uuid from 'uuid'
import { CreateRestaurantDto , CreateRestaurant , Table  } from '../../../types'
import { getRestaurantInfo } from '../../../helpers/documenu'
import { extractItems } from '../../../helpers/extractItems'
import { createQrBath } from '../../../helpers/createQrBatch'

const router = express.Router()

module.exports = (database) => {
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
      menu
    }

    await database.createRestaurant(newRestaurant)
    delete newRestaurant.password

    const qrCodes = await createQrBath(tables)

    const tablesQr : Table[] = qrCodes.map(item => ({qr : item}))
    

    newRestaurant.tables = tablesQr

    res.json(newRestaurant)
  })

  router.get('/menu', (req,res) => {
    const { restaurantId } = req.body
    // TODO get menu items from documenu with restaurantId from client
    res.json({ menuItems: ['Steak', 'Burger', 'Fries'] })
  })

  return router
}
