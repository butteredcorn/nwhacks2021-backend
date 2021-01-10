import {createQr} from './createQr'
import { Table } from '../types'
export function createQrBath(tables : Table[]) : Promise<string[]>{
    const codes : Promise<string>[] = []
    for(const url of tables){
        codes.push(createQr(url.qr))
    }

    return Promise.all(codes)
}