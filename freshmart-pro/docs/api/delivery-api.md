# FreshMart Pro Delivery Partner API

All delivery endpoints reside under `/api/v1/delivery` and require `ROLE_DELIVERY_PARTNER` authentication.

## List Assigned Deliveries

`GET /api/v1/delivery/orders`

### Query Parameters
- `status` (optional): `ASSIGNED` or `DELIVERED`

### Response (200 OK)
```json
{
  "success": true,
  "message": "Assigned delivery orders retrieved",
  "data": [
    {
      "deliveryId": 3001,
      "orderId": 2001,
      "customerName": "John Doe",
      "deliveryAddress": "123, Green Avenue, Cityville",
      "customerPhone": "+919876543210",
      "deliverySlot": "09:00 AM - 11:00 AM",
      "totalAmount": 1150.00,
      "status": "ASSIGNED"
    }
  ],
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Update Delivery Status

`PUT /api/v1/delivery/orders/{deliveryId}/status`

### Request Body
```json
{
  "status": "OUT_FOR_DELIVERY"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "Delivery status updated to OUT_FOR_DELIVERY",
  "data": {
    "deliveryId": 3001,
    "status": "OUT_FOR_DELIVERY"
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Live Location Tracking Updates

`POST /api/v1/delivery/orders/{deliveryId}/location`

### Request Body
```json
{
  "latitude": 12.971598,
  "longitude": 77.594566
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "Location updated successfully",
  "data": null,
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Earnings Dashboard

`GET /api/v1/delivery/earnings`

### Response (200 OK)
```json
{
  "success": true,
  "message": "Earnings summary retrieved successfully",
  "data": {
    "totalEarnings": 4850.00,
    "totalDeliveries": 32,
    "incentives": 500.00,
    "recentPayouts": [
      { "date": "2026-06-21", "amount": 750.00, "status": "PAID" },
      { "date": "2026-06-20", "amount": 800.00, "status": "PAID" }
    ]
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```
