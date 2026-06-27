# FreshMart Pro

FreshMart Pro is an enterprise grocery ecosystem with a React TypeScript storefront, admin/vendor/delivery dashboards, Spring Boot APIs, MySQL schema, real-time notifications, analytics, and AI-assisted shopping.

## Local Development

```bash
cd freshmart-pro
docker compose -f infra/docker/docker-compose.yml up --build
```

Frontend: `http://localhost:5173`  
Backend API: `http://localhost:8080/api/v1`  
MySQL: `localhost:3306`

## Manual Development

Backend:

```bash
cd backend
mvn spring-boot:run
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Demo Accounts

- Customer: `customer@freshmart.pro` / `Password@123`
- Admin: `admin@freshmart.pro` / `Password@123`
- Vendor: `vendor@freshmart.pro` / `Password@123`
- Delivery: `delivery@freshmart.pro` / `Password@123`

## Modules

- Authentication with JWT, refresh token, OTP, email verification, Google OAuth entry point
- Product catalog, categories, search, recommendations
- Cart, wishlist, checkout, Razorpay-ready payment workflow, order management
- User profile, wallet, cashback, notifications
- Admin, vendor, and delivery dashboards
- WebSocket event publishing for inventory/order/notification updates
- Docker, Nginx, AWS EC2 notes, GitHub Actions
