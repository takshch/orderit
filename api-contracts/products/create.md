# Route - /products
- Creates product by seller

## Request - POST
  ```js
  {
    "data": {
      "type": "products",
      "attributes": {
        "name": "",
        "src": "",
        "price": "",
      }
    }
  }
  ```

## Response
  - If successful
    ```js
    {
      "data": {
        "type": "products",
        "id": "",
        "attributes": {
          "name": "",
          "src": "",
          "price": "",
        },
        "links": {
          "self": "http://example.com/products/:id"
        }
      }
    }
    ```
  - If errors:
    - Error - Unauthorized
    ```js
    {
      "errors": [
        {
          "code": "auth/unauthorized-user"
          "detail": "Unauthorized user"
        },
      ]
    }
    ```
