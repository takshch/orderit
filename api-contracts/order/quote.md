# Route /order/quote

Give details of the order going to be

## Request - POST

```js
{
  "products": [
    {
      "id": "string",
      "quantity": "number"
    }
  ]
}
```

## Response

```js
{
  "sub": [
    {
      "id": "string",
      "name": "string",
      "src": "string",
      "price": "number",
      "quantity": "number",
      "total": "number"
    }
  ],
  "subtotal": "number",
  "taxPercentage": "number",
  "tax": "number",
  "total": "number",
}
```
