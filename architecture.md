# FreshMart Pro - System Architecture

## Overview
FreshMart Pro is a premium, enterprise-grade supermarket e-commerce platform designed for high scalability, real-time updates, and a modern user experience. It supports four primary user roles: Customer, Admin, Vendor, and Delivery Partner.

## Technology Stack
*   **Frontend**: Next.js (App Router) for SEO, Server-Side Rendering (SSR), and dynamic routing.
*   **Styling**: Vanilla CSS / CSS Modules (for maximum flexibility and unique design aesthetics, adhering to modern web design principles like glassmorphism and smooth animations).
*   **State Management**: Zustand (for lightweight, scalable state management).
*   **Backend**: Node.js with Express.js for a robust, scalable microservices-inspired API architecture.
*   **Database**: PostgreSQL (with Prisma ORM) for strict data integrity, complex queries, and transactional safety (critical for orders and payments).
*   **Caching**: Redis (for product catalogs, session management, and fast search queries).
*   **Real-time Services**: Socket.io (for live delivery tracking, live inventory updates, and live notifications).
*   **Storage**: AWS S3 / Cloudinary for optimized image storage and delivery.
*   **Payments**: Razorpay gateway integration (Credit/Debit, UPI, Wallets).
*   **AI/ML Integration**: Integrated AI APIs for personalized recommendations, smart baskets, and "Frequently Bought Together" features.

## Folder Structure

### 1. Frontend Repository (`/frontend`)
```text
frontend/
├── public/                # Static assets, icons, fonts, placeholder images
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── (customer)/    # Customer facing routes (Home, Shop, Cart, Checkout)
│   │   ├── admin/         # Admin Dashboard routes
│   │   ├── vendor/        # Vendor Dashboard routes
│   │   ├── delivery/      # Delivery Partner Dashboard routes
│   │   ├── layout.tsx     # Global layout (Providers, Fonts)
│   │   └── page.tsx       # Main landing page
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Buttons, Inputs, Modals, Loaders
│   │   ├── layout/        # Navbar, Footer, Sidebar, Drawers
│   │   ├── cards/         # Product Card, Category Card
│   │   └── specialized/   # Role-specific components (e.g., Sales Charts)
│   ├── styles/            # Vanilla CSS / CSS Modules, Design Tokens
│   │   ├── variables.css  # Colors, Typography, Spacing, Themes (Dark/Light)
│   │   ├── globals.css    # Global resets and base styles
│   │   └── animations.css # Smooth micro-animations and transitions
│   ├── hooks/             # Custom React Hooks (e.g., useCart, useAuth)
│   ├── context/           # React Context API providers (if needed alongside Zustand)
│   ├── store/             # Global state stores (Zustand slices)
│   ├── services/          # API calls (Axios/Fetch instances and endpoints)
│   ├── utils/             # Helper functions, formatters, constants
│   └── types/             # TypeScript interfaces and types
├── next.config.js
└── package.json
```

### 2. Backend Repository (`/backend`)
```text
backend/
├── src/
│   ├── api/
│   │   ├── routes/        # Express route definitions grouped by domain
│   │   ├── controllers/   # Request handling and response formatting
│   │   ├── middlewares/   # Auth, Validation, Error Handling, Rate Limiting
│   │   └── validators/    # Input validation schemas (Zod)
│   ├── services/          # Core business logic
│   │   ├── auth/          # Authentication & Authorization (JWT)
│   │   ├── product/       # Product catalog, categories, AI recommendations
│   │   ├── order/         # Order processing, state machine, cart logic
│   │   ├── payment/       # Razorpay integration & webhook handling
│   │   └── user/          # User profiles, addresses, wallets
│   ├── models/            # Database schemas (Prisma schema mappings)
│   ├── config/            # Environment variables, DB connection config
│   ├── events/            # Socket.io event handlers (Real-time updates)
│   ├── utils/             # Helper functions, logger, encryption
│   └── index.ts           # Entry point
├── prisma/                # Prisma schema file (`schema.prisma`) and migrations
├── tests/                 # Unit and integration tests
├── .env
├── tsconfig.json
└── package.json
```

## System Components & Modules

1.  **Authentication & Identity**: JWT-based authentication with Role-Based Access Control (RBAC). Manages sessions for Customers, Admins, Vendors, and Delivery Partners.
2.  **Catalog Engine**: Handles complex product hierarchies, categorization, variants, inventory checks, vendor ownership, and search algorithms.
3.  **Order & Checkout Engine**: Manages the lifecycle of an order from cart creation, coupon validation, tax calculation (GST), payment gateway handoff, vendor assignment, delivery partner assignment, to fulfillment.
4.  **Real-time Engine**: WebSockets infrastructure to track delivery partners on a map and update the customer UI. Notifies vendors of new orders instantly.
5.  **Dashboard Analytics**: Aggregation queries for admin and vendor revenue charts, sales analytics, and inventory forecasting.
