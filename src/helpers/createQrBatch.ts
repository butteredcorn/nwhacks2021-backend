require('dotenv').config()

import {createQr} from './createQr'
import { Table } from '../types'
const querystring = require('querystring')

export function createQrBath(tables : Table[]) : Promise<string[]>{
    const codes : Promise<string>[] = []
    for(const table of tables){
        const queryParams = querystring.stringify({id : table.restaurantId , table : table.tableNumber})
        const baseUrl = process.env['DOMAIN']
        const fullUrl = `${baseUrl}/restaurant/menu?${queryParams}`
        codes.push(createQr(fullUrl))
    }

    return Promise.all(codes)
}