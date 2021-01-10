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


### `POST /api/restaurant/create`
- Body
```ts
{
  documenuId : string,
  tables : number,
  password : string
}
```
- Response
```ts
{
  tables: [
    {
      qr : BLOB
    }
  ]
  menu: [
      {
          description: string,
          price: number,
          title: string
      }
  ],
  name: string,
  generatedId: string
}
```

### `POST /api/purchase/`
- Body
```ts
{
  orderId : string
}
```
- Response
```ts
{
  //Stripe id used to send the user to the payment page
  id : string
}
```

### `POST /api/purchase/completed`
- Body
```ts
{
  orderId : string,
  isPaid : bool
}
```
- Response

Returns a `200` status code.


## `GET /api/restaurant/[restaurantId]`
- Response
```ts
{
  tables: [
    {
      qr : string
    }
  ]
  menu: [
      {
          description: string,
          price: number,
          title: string
      }
  ],
  name: string,
  generatedId: string
}
```