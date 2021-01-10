# Nom Nom

## API Docs

### `POST /api/restaurant/[restaurantId]/[tableId]/place-order`
- Body
```ts
{
  items: Array<{ title: string, quantity: number, price: number }>
}
```
- Response
```ts
{
  orderId: number
}
```

### `POST /api/restaurant/[restaurantId]/orders`
- Body
```ts
{
  password: string
}
```
- Response
```ts
[
  {
    isActive: boolean
    isPaid: boolean
    items: Array<{ title: string quantity: number price: number }>
    table: number
    time: string
    total: number
    orderId: string
  }
]
```

### `POST /api/restaurant/[restaurantId]/[orderId]/complete-order`
- Body
```ts
{
  password: string
}
```
- Response
```ts
{
  completeTime: string
}
```
