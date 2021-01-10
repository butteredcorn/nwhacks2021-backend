export interface MenuItem {
  title: string
  description: string
  price: number
}

export interface Table {
  qr: string
}

export interface CreateRestaurant {
  name: string
  password: string
  menu: MenuItem[]
  tables: Table[],
  generatedId? : string
}


export interface Restaurant
{
    generatedId?: string,
    tables: Table[],
    menu: MenuItem[],
    name: string,
    password? : string
}

export interface CreateRestaurantDto{
  documenuId : string,
  tables : number,
  password : string
}

export interface GetPaymentIdDto{
  orderId : string
}