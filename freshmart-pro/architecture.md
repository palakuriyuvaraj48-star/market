# FreshMart Pro Architecture

FreshMart Pro is an enterprise grocery and supermarket ecosystem with customer storefront, admin operations, vendor operations, delivery operations, real-time updates, analytics, and AI-assisted shopping.

This document is the approval gate before implementation. After approval, the project will be generated module-by-module in the sequence listed at the end.

## 1. Target Technology Stack

### Frontend

- React 19 with TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router v7
- TanStack Query
- Axios
- Framer Motion
- React Hook Form
- Zod
- Socket.io Client
- Recharts
- Shadcn UI patterns
- Lucide React
- Vitest and React Testing Library

### Backend

- Java 21
- Spring Boot 3
- Maven
- Spring Web
- Spring Security
- Spring Data JPA
- Spring Validation
- Spring Mail
- Spring OAuth2 Client
- Spring Cache
- Spring Scheduling
- Spring WebSocket
- JUnit and Mockito

### Data and Infrastructure

- MySQL 8
- Hibernate JPA
- Flyway-style database migrations
- Docker and Docker Compose
- Nginx reverse proxy
- GitHub Actions CI/CD
- AWS EC2 deployment plan
- AWS S3 image storage integration

## 2. Repository Structure

```text
freshmart-pro/
├── architecture.md
├── README.md
├── docs/
│   ├── api/
│   │   ├── rest-api.md
│   │   ├── auth-api.md
│   │   ├── admin-api.md
│   │   ├── vendor-api.md
│   │   └── delivery-api.md
│   ├── database/
│   │   ├── schema.md
│   │   └── er-diagram.md
│   ├── deployment/
│   │   ├── aws-ec2.md
│   │   ├── docker.md
│   │   └── environment.md
│   └── diagrams/
│       ├── system-context.md
│       ├── container-diagram.md
│       └── sequence-diagrams.md
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── eslint.config.js
│   ├── index.html
│   ├── public/
│   ├── tests/
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── app/
│       │   ├── providers.tsx
│       │   ├── queryClient.ts
│       │   └── environment.ts
│       ├── assets/
│       │   ├── images/
│       │   └── icons/
│       ├── components/
│       │   ├── common/
│       │   ├── ui/
│       │   ├── layout/
│       │   ├── products/
│       │   ├── cart/
│       │   ├── checkout/
│       │   ├── profile/
│       │   ├── vendor/
│       │   ├── delivery/
│       │   ├── admin/
│       │   └── chatbot/
│       ├── constants/
│       ├── context/
│       ├── data/
│       ├── features/
│       │   ├── auth/
│       │   ├── catalog/
│       │   ├── search/
│       │   ├── cart/
│       │   ├── wishlist/
│       │   ├── checkout/
│       │   ├── orders/
│       │   ├── payments/
│       │   ├── profile/
│       │   ├── admin/
│       │   ├── vendor/
│       │   ├── delivery/
│       │   ├── analytics/
│       │   ├── notifications/
│       │   └── ai-shopping/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       │   ├── auth/
│       │   ├── customer/
│       │   ├── admin/
│       │   ├── vendor/
│       │   └── delivery/
│       ├── routes/
│       ├── schemas/
│       ├── services/
│       ├── store/
│       │   └── slices/
│       ├── styles/
│       ├── types/
│       └── utils/
├── backend/
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   ├── java/com/freshmartpro/
│       │   │   ├── FreshMartProApplication.java
│       │   │   ├── config/
│       │   │   ├── common/
│       │   │   │   ├── exception/
│       │   │   │   └── response/
│       │   │   ├── security/
│       │   │   │   ├── jwt/
│       │   │   │   └── oauth/
│       │   │   ├── domain/
│       │   │   │   ├── auth/
│       │   │   │   ├── user/
│       │   │   │   ├── catalog/
│       │   │   │   ├── cart/
│       │   │   │   ├── wishlist/
│       │   │   │   ├── checkout/
│       │   │   │   ├── order/
│       │   │   │   ├── payment/
│       │   │   │   ├── vendor/
│       │   │   │   ├── delivery/
│       │   │   │   ├── notification/
│       │   │   │   ├── analytics/
│       │   │   │   └── ai/
│       │   │   └── websocket/
│       │   └── resources/
│       │       ├── application.yml
│       │       ├── application-dev.yml
│       │       ├── application-prod.yml
│       │       └── db/migration/
│       └── test/java/com/freshmartpro/
├── database/
│   ├── schema/
│   │   ├── 001_create_core_tables.sql
│   │   ├── 002_create_commerce_tables.sql
│   │   ├── 003_create_operations_tables.sql
│   │   └── 004_create_analytics_tables.sql
│   ├── seed/
│   │   ├── roles.sql
│   │   ├── categories.sql
│   │   ├── products.sql
│   │   └── demo-users.sql
│   └── migrations/
└── infra/
    ├── docker/
    │   ├── Dockerfile.frontend
    │   ├── Dockerfile.backend
    │   └── docker-compose.yml
    ├── nginx/
    │   └── freshmart-pro.conf
    ├── aws/
    │   ├── ec2-deployment.md
    │   ├── s3-policy.json
    │   └── userdata.sh
    ├── github-actions/
    │   └── ci-cd.yml
    └── scripts/
        ├── dev-start.ps1
        └── seed-db.ps1
```

## 3. Frontend Architecture

The frontend uses feature-based organization with shared UI primitives and routed page shells.

### Core Boundaries

- `app/`: application providers, query client, runtime environment, root bootstrap.
- `components/ui/`: reusable low-level controls based on Shadcn UI patterns.
- `components/common/`: product-independent reusable widgets such as skeletons, empty states, error states, search command palette, and notifications.
- `components/layout/`: public layout, dashboard layout, mobile navigation, sidebar, footer, and topbar.
- `features/*`: business-specific state, API hooks, schemas, and composed feature components.
- `pages/*`: route-level page composition only.
- `services/`: Axios clients and endpoint adapters.
- `store/`: Redux store and UI/session slices.
- `schemas/`: Zod validation schemas shared by forms and service payloads.
- `types/`: TypeScript domain contracts.

### Frontend Feature Modules

- `auth`: login, Google login, OTP, refresh token handling, email verification, forgot password.
- `catalog`: products, categories, brands, product details, reviews, ratings, inventory indicators.
- `search`: global search, fuzzy search, voice search, suggestions, trending and recent searches.
- `cart`: cart, save for later, coupon application, totals.
- `wishlist`: wishlist and move-to-cart.
- `checkout`: address selection, delivery slots, payment selection, order placement.
- `orders`: order history, detail, tracking, cancellation, returns, refunds, reorder.
- `payments`: Razorpay, UPI, card, net banking, COD workflow.
- `profile`: profile, address book, saved payments, wallet, cashback, notifications.
- `admin`: analytics, products, categories, banners, coupons, customers, vendors, inventory, audit logs.
- `vendor`: vendor dashboard, product upload, order processing, revenue reports.
- `delivery`: assigned orders, route view, status updates, earnings.
- `analytics`: chart and report components.
- `notifications`: socket events and notification center.
- `ai-shopping`: recommendation engine UI, smart basket, assistant, natural language search.

## 4. Backend Architecture

The backend follows Clean Architecture with domain-oriented packages. Each domain module owns its controller, DTOs, application services, domain services, entities, repositories, and mappers.

### Package Pattern

```text
domain/<module>/
├── controller/
├── dto/
│   ├── request/
│   └── response/
├── entity/
├── enums/
├── mapper/
├── repository/
├── service/
│   ├── application/
│   └── domain/
└── validation/
```

### Backend Domain Modules

- `auth`: JWT, refresh tokens, OAuth2, OTP, email verification, password reset.
- `user`: profile, roles, addresses, saved payment references, preferences.
- `catalog`: categories, subcategories, products, images, brands, reviews, ratings.
- `cart`: cart and cart item lifecycle.
- `wishlist`: wishlist item lifecycle.
- `checkout`: checkout orchestration, invoice generation, slot selection.
- `order`: order placement, timeline, cancellation, return, refund request, reorder.
- `payment`: Razorpay order creation, payment verification, UPI/card/COD state tracking, transactions.
- `vendor`: vendor onboarding, vendor products, revenue, order processing.
- `delivery`: partner assignments, status updates, route tracking.
- `notification`: mail, in-app notifications, socket notifications.
- `analytics`: revenue, sales, customer, product, vendor, conversion reporting.
- `ai`: recommendations, frequently bought together, smart basket, search personalization.

## 5. Database Design

The MySQL database will be normalized around identity, catalog, commerce, operations, engagement, and analytics.

### Tables

- `users`
- `roles`
- `addresses`
- `products`
- `product_images`
- `categories`
- `sub_categories`
- `brands`
- `vendors`
- `vendor_products`
- `inventory`
- `cart`
- `cart_items`
- `wishlist`
- `wishlist_items`
- `orders`
- `order_items`
- `payments`
- `transactions`
- `coupons`
- `reviews`
- `ratings`
- `notifications`
- `delivery_partners`
- `deliveries`
- `wallets`
- `cashback_history`
- `subscriptions`
- `search_history`
- `analytics`
- `audit_logs`

### Key Relationships

- `users` has many `addresses`, `orders`, `reviews`, `ratings`, `notifications`, `search_history`, and `audit_logs`.
- `users` has many `roles` through a join table or normalized role assignment.
- `categories` has many `sub_categories`.
- `products` belongs to `categories`, optional `sub_categories`, and `brands`.
- `products` has many `product_images`, `reviews`, `ratings`, `vendor_products`, and `inventory` rows.
- `vendors` has many `vendor_products` and can process many order items.
- `cart` belongs to one user and has many `cart_items`.
- `wishlist` belongs to one user and has many `wishlist_items`.
- `orders` belongs to one user and has many `order_items`, `payments`, `transactions`, and `deliveries`.
- `delivery_partners` has many `deliveries`.
- `wallets` belongs to one user and has many `cashback_history` entries.
- `coupons` can be applied to orders and tracked in payment/order metadata.

## 6. API Design

All APIs use `/api/v1` as the base path.

### Endpoint Groups

- `/auth/*`: register, login, refresh, logout, Google login, OTP, verify email, forgot/reset password.
- `/users/*`: profile, addresses, wallet, notifications, saved payments.
- `/products/*`: product listing, product detail, search, filters, reviews, ratings.
- `/categories/*`: category and subcategory discovery.
- `/cart/*`: add, update, remove, save for later, totals, coupons.
- `/wishlist/*`: add, remove, move to cart.
- `/orders/*`: place, list, detail, track, cancel, return, refund, reorder.
- `/payments/*`: Razorpay order, verification, payment methods, transactions.
- `/vendors/*`: vendor dashboard, products, inventory, orders, reports.
- `/delivery/*`: assigned orders, status updates, tracking, earnings.
- `/analytics/*`: reports for authorized roles.
- `/admin/*`: full operations management.

## 7. Security Architecture

- JWT access tokens with short TTL.
- Refresh tokens persisted with rotation and revocation.
- Google OAuth2 login.
- OTP login for phone/email.
- Email verification before sensitive account actions.
- Role-based access control with `ROLE_CUSTOMER`, `ROLE_ADMIN`, `ROLE_VENDOR`, and `ROLE_DELIVERY_PARTNER`.
- Method-level authorization for privileged operations.
- CSRF protection for browser-sensitive flows.
- Rate limiting for auth, OTP, search, and payment endpoints.
- DTO validation with Spring Validation.
- SQL injection protection through JPA repositories and parameterized queries.
- XSS protection through output escaping, strict validation, and frontend sanitization where rich text is rendered.
- Audit logging for admin, vendor, payment, order, and security-sensitive events.

## 8. Real-Time Architecture

Spring WebSocket powers backend events; Socket.io Client handles frontend subscriptions.

### Event Channels

- `inventory.updated`
- `order.created`
- `order.status.updated`
- `delivery.location.updated`
- `payment.status.updated`
- `notification.created`
- `admin.metric.updated`

## 9. AI Features

The first implementation will use deterministic local recommendation services that can later be replaced by a model-backed service.

- Personalized recommendations from order history, wishlist, cart, and search history.
- Frequently bought together using product co-occurrence.
- Smart basket recommendations from recurring essentials.
- Natural language search mapped into structured filters.
- AI shopping assistant backed by catalog, cart, offers, and order status context.
- Shopping pattern analysis for admin and user insights.

## 10. UI/UX System

- Premium SaaS dashboard visual language for admin, vendor, and delivery portals.
- Consumer grocery storefront with dense, scannable product discovery.
- Mobile-first layouts with tablet and desktop refinements.
- Light and dark mode.
- Glassmorphism used selectively for navigation, overlays, and dashboard surfaces.
- Skeleton loading and empty/error states.
- Accessible keyboard navigation and focus states.
- SEO-friendly route metadata for storefront pages.
- Optimized image loading with lazy loading, placeholder loading, and S3-ready image URLs.

## 11. DevOps Architecture

- `docker-compose.yml` runs frontend, backend, and MySQL locally.
- Backend container builds Spring Boot JAR.
- Frontend container builds static Vite output and serves through Nginx.
- Nginx reverse proxy routes `/` to frontend and `/api` plus `/ws` to backend.
- GitHub Actions runs frontend lint/tests/build, backend tests/package, and Docker image build.
- AWS EC2 deployment guide covers provisioning, environment variables, Docker deployment, Nginx, SSL, and log rotation.
- AWS S3 integration stores product, category, banner, and profile images.

## 12. Testing Strategy

### Frontend

- Unit tests for utilities, schemas, and slices.
- Component tests for product cards, search, cart, checkout forms, and dashboards.
- Route smoke tests for customer, admin, vendor, and delivery shells.

### Backend

- Unit tests for domain services.
- Controller tests for REST contracts.
- Repository tests for JPA mappings and query behavior.
- Security tests for authorization rules.
- Payment workflow tests with Razorpay verification mocked.

## 13. Module Generation Plan

After this architecture is approved, code will be generated in this order:

1. Root workspace, documentation, env examples, Docker baseline.
2. Database schema, seed scripts, ER documentation.
3. Backend foundation: Maven, application config, common responses, exception handling.
4. Backend security and auth: JWT, refresh tokens, OAuth2, OTP, email verification.
5. Backend catalog: categories, products, images, inventory, reviews, ratings.
6. Backend cart, wishlist, checkout, orders, payments.
7. Backend user profile, wallet, notifications.
8. Backend admin, vendor, delivery, analytics.
9. Backend WebSocket and AI recommendation services.
10. Frontend foundation: Vite React TypeScript, Tailwind, Shadcn-style UI, providers, routing.
11. Frontend auth and customer storefront.
12. Frontend search, catalog, product detail.
13. Frontend cart, wishlist, checkout, payments, orders.
14. Frontend profile, notifications, wallet.
15. Frontend admin dashboard.
16. Frontend vendor dashboard.
17. Frontend delivery dashboard.
18. Frontend AI assistant and recommendation surfaces.
19. Tests for frontend and backend.
20. Final documentation, CI/CD, deployment guide, and verification.

## 14. Approval Checkpoint

Implementation will pause here. No application module code should be generated until the architecture and module generation order are approved.
