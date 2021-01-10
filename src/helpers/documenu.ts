require('dotenv').config()

const Documenu = require('documenu')
Documenu.configure(process.env['DOCUMENU'])

export const getRestaurantInfo = async (id) => {
    return await Documenu.Restaurants.get(id)
}