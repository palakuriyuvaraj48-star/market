# Sequence Diagrams

These sequence diagrams detail key multi-party interactions in the system.

## 1. Authentication and Registration Flow

```mermaid
sequenceDiagram
    autonumber
    actor Customer
    participant SPA as React Front-End SPA
    participant API as Spring Boot API
    participant DB as MySQL DB
    participant Mail as SMTP Mail Gateway

    Customer->>SPA: Enter name, email, password
    SPA->>API: POST /api/v1/auth/register
    API->>DB: Save user (state: UNVERIFIED)
    API->>Mail: Send verification email with token
    API-->>SPA: Success response (registration details)
    SPA-->>Customer: Show "Please verify email" screen
    Customer->>Mail: Click link / copy token
    Customer->>SPA: Submit verification token
    SPA->>API: POST /api/v1/auth/email/verify?token=...
    API->>DB: Update user state to VERIFIED
    API-->>SPA: Return Success (user verified)
    SPA-->>Customer: Redirect to Login / Dashboard
```

## 2. Checkout and Razorpay Integration Flow

```mermaid
sequenceDiagram
    autonumber
    actor Customer
    participant SPA as React Front-End SPA
    participant API as Spring Boot API
    participant Gateway as Razorpay APIs
    participant DB as MySQL DB

    Customer->>SPA: Click "Place Order"
    SPA->>API: POST /api/v1/checkout
    API->>DB: Lock inventory & create order (state: PENDING_PAYMENT)
    API->>Gateway: Create Payment Order (amount, currency)
    Gateway-->>API: Return Razorpay Order ID
    API-->>SPA: Return Order Details & Razorpay Order ID
    SPA->>Customer: Launch Razorpay Checkout modal
    Customer->>Gateway: Select Payment Mode (Card/UPI) & Pay
    Gateway-->>Customer: Return payment authorization
    Gateway->>SPA: Return Razorpay payment_id & signature
    SPA->>API: POST /api/v1/payments/verify (payment_id, signature, order_id)
    API->>Gateway: Validate signature with key secret
    API->>DB: Save transaction, update Order state to PAID / CONFIRMED
    API-->>SPA: Return Success (Order confirmed)
    SPA-->>Customer: Display "Order Placed Successfully" screen
```

## 3. Real-Time Order Tracking Workflow

```mermaid
sequenceDiagram
    autonumber
    actor Delivery as Delivery Partner
    participant App as Delivery Partner Mobile App
    participant API as Spring Boot API
    participant WS as WebSocket Gateway
    participant SPA as Customer Storefront SPA
    actor Customer

    Customer->>SPA: Open order tracking page
    SPA->>WS: Subscribe to /topic/order/{orderId}
    Delivery->>App: Update order location
    App->>API: POST /api/v1/delivery/orders/{id}/location (lat, lng)
    API->>WS: Broadcast location coordinates
    WS-->>SPA: Stream location update event
    SPA->>SPA: Move car marker on Leaflet map
    Customer-->>SPA: View live courier movement
```
