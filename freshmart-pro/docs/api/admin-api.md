# FreshMart Pro Admin API

All admin endpoints reside under `/api/v1/admin` and require `ROLE_ADMIN` authentication.

## Sales Analytics

`GET /api/v1/admin/analytics/sales`

### Query Parameters
- `startDate` (optional): `2026-06-01`
- `endDate` (optional): `2026-06-22`

### Response (200 OK)
```json
{
  "success": true,
  "message": "Sales analytics retrieved successfully",
  "data": {
    "totalOrders": 1250,
    "completedOrders": 1200,
    "cancelledOrders": 50,
    "totalSalesAmount": 450000.00,
    "salesGraph": [
      { "date": "2026-06-20", "sales": 15000.00, "orders": 45 },
      { "date": "2026-06-21", "sales": 18000.00, "orders": 52 }
    ]
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Product Management

### Create Product
`POST /api/v1/admin/products`

#### Request Body
```json
{
  "name": "Organic Tomatoes",
  "categoryId": 1,
  "description": "Fresh and chemical-free organic tomatoes.",
  "price": 40.00,
  "discountPrice": 32.00,
  "stockQuantity": 150,
  "deliveryTime": "15-20 min",
  "imageUrl": "https://images.unsplash.com/photo-1595855759920-86582396756a"
}
```

#### Response (201 Created)
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "productId": 101,
    "name": "Organic Tomatoes",
    "price": 40.00,
    "discountPrice": 32.00,
    "stockStatus": "IN_STOCK",
    "rating": 0.0,
    "reviewCount": 0
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Category Management

### Create Category
`POST /api/v1/admin/categories`

#### Request Body
```json
{
  "name": "Vegetables",
  "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999",
  "isActive": true
}
```

#### Response (201 Created)
```json
{
  "success": true,
  "message": "Category created successfully",
  "data": {
    "categoryId": 1,
    "name": "Vegetables",
    "isActive": true
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Vendor Management

### List Vendors
`GET /api/v1/admin/vendors`

#### Response (200 OK)
```json
{
  "success": true,
  "message": "Vendors list retrieved successfully",
  "data": [
    {
      "vendorId": 1,
      "storeName": "Metro Super Foods",
      "ownerName": "Alice Smith",
      "email": "vendor@freshmart.pro",
      "status": "APPROVED",
      "rating": 4.8
    }
  ],
  "timestamp": "2026-06-22T22:45:00Z"
}
```
