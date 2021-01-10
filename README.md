# Nom Nom

## API Docs

### `POST /api/restaurant/[restaurantId]/[tableId]/place-order`
- Body
```ts
{
  items: Array<{ title: string, quantity: number, price: number }>
}
```

### `POST /api/restaurant/[restaurantId]/orders`
- Body
```ts
{
  password: string
}
```

### `POST /api/restaurant/[restaurantId]/[orderId]/complete-order`
- Body
```ts
{
  password: string
}
```
