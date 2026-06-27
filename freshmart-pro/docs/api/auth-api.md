# FreshMart Pro Authentication API

All auth endpoints reside under `/api/v1/auth`.

## Register Customer

`POST /api/v1/auth/register`

### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "Password@123",
  "phone": "+919876543210"
}
```

### Response (201 Created)
```json
{
  "success": true,
  "message": "User registered successfully. Verification email sent.",
  "data": {
    "userId": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "CUSTOMER",
    "verified": false
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Login with Password

`POST /api/v1/auth/login`

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "Password@123"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "Authentication successful",
  "data": {
    "accessToken": "eyJhbGciOi...",
    "refreshToken": "eyJhbGciOi...",
    "expiresIn": 900,
    "user": {
      "userId": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "CUSTOMER"
    }
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Token Refresh

`POST /api/v1/auth/refresh`

### Request Body
```json
{
  "refreshToken": "eyJhbGciOi..."
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "eyJhbGciOi...",
    "refreshToken": "eyJhbGciOi...",
    "expiresIn": 900
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Logout

`POST /api/v1/auth/logout`

### Request Body
```json
{
  "refreshToken": "eyJhbGciOi..."
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "User logged out successfully",
  "data": null,
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Send OTP

`POST /api/v1/auth/otp/send`

### Request Body
```json
{
  "phone": "+919876543210"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "OTP sent successfully to the registered phone number",
  "data": null,
  "timestamp": "2026-06-22T22:45:00Z"
}
```

---

## Verify OTP

`POST /api/v1/auth/otp/verify`

### Request Body
```json
{
  "phone": "+919876543210",
  "otp": "123456"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "OTP verified. Login successful.",
  "data": {
    "accessToken": "eyJhbGciOi...",
    "refreshToken": "eyJhbGciOi...",
    "expiresIn": 900,
    "user": {
      "userId": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "CUSTOMER"
    }
  },
  "timestamp": "2026-06-22T22:45:00Z"
}
```
