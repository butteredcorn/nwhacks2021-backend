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

interface OrderItem {
  title: string
  quantity: number
  price: number
}

export interface Order {
  isActive: boolean
  isPaid: boolean
  items: OrderItem[]
  restaurant: string
  table: number
  time: string
  total: number
}

interface PlaceOrderItem {
  title: string
  quantity: number
  price: number
}

export interface PlaceOrder {
  items: PlaceOrderItem[]
}

export interface PlaceOrderDb extends PlaceOrder {
  restaurantId: string
  tableId: number
}

export interface CompleteOrder {
  orderId: string
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