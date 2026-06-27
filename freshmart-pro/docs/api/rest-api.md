# FreshMart Pro REST API Reference

Base Path: `/api/v1`

## Standard Envelope

All successful responses return a standard JSON envelope:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... },
  "timestamp": "2026-06-22T14:22:00Z"
}
```

Error responses return a detailed error description:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "rejectedValue": "invalid-email",
      "reason": "Must be a valid email address"
    }
  ],
  "timestamp": "2026-06-22T14:22:00Z"
}
```

## Global Status Codes

| Code | Meaning | Description |
|---|---|---|
| `200 OK` | Success | Request succeeded. |
| `201 Created` | Created | Resource created successfully. |
| `400 Bad Request` | Invalid Input | Validation failed or request body syntactically incorrect. |
| `401 Unauthorized` | Unauthenticated | JWT is missing, expired, or invalid. |
| `403 Forbidden` | Access Denied | Authenticated but lacks required role or privileges. |
| `404 Not Found` | Not Found | Target resource does not exist. |
| `500 Server Error` | System Error | Unexpected server error. |
