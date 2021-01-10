interface MenuItem {
  title: string
  description: string
  price: number
}

interface Table {
  qr: string
}

export interface CreateRestaurant {
  name: string
  password: string
  menu: MenuItem[]
  tables: number
}
