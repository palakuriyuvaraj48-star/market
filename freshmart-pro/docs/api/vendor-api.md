# FreshMart Pro Vendor API

All vendor endpoints reside under `/api/v1/vendors` and require `ROLE_VENDOR` authentication.

## Vendor Product Upload

`POST /api/v1/vendors/products`

### Request Body
```json
{
  "name": "Premium Basmati Rice 5kg",
  "categoryId": 5,
  "description": "Long grain premium quality Basmati rice.",
  "price": 600.00,
  "discountPrice": 540.00,
  "stockQuantity": 80,
  "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c"
}
```

### Response (201 Created)
```json
{
  "success": true,
  "message": "Product uploaded successfully for vendor listing",
  "data": {
    "vendorProductId": 501,
    "name": "Premium Basmati Rice 5kg",
    "stockQuantity": 80,
    "status": "PENDING_APPROVAL"
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Inventory Control

`PUT /api/v1/vendors/inventory/{vendorProductId}`

### Request Body
```json
{
  "stockQuantity": 120
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "Inventory updated successfully",
  "data": {
    "vendorProductId": 501,
    "stockQuantity": 120
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Order Processing

### List Assigned Orders
`GET /api/v1/vendors/orders`

#### Response (200 OK)
```json
{
  "success": true,
  "message": "Vendor orders retrieved",
  "data": [
    {
      "orderId": 2001,
      "orderItemId": 12,
      "productName": "Premium Basmati Rice 5kg",
      "quantity": 2,
      "price": 1080.00,
      "status": "PROCESSING"
    }
  ],
  "timestamp": "2026-06-22T22:45:00Z"
}
```

### Update Order Item Status
`PUT /api/v1/vendors/orders/{orderItemId}/status`

#### Request Body
```json
{
  "status": "READY_FOR_PICKUP"
}
```

#### Response (200 OK)
```json
{
  "success": true,
  "message": "Order item status updated",
  "data": {
    "orderItemId": 12,
    "status": "READY_FOR_PICKUP"
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```
