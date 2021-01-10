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