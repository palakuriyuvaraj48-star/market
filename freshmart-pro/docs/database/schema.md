# Database Schema

The database is split into four migration-sized files:

- `001_create_core_tables.sql`: identity, users, catalog foundations.
- `002_create_commerce_tables.sql`: inventory, cart, wishlist, coupons, orders.
- `003_create_operations_tables.sql`: payments, reviews, notifications, delivery, wallets.
- `004_create_analytics_tables.sql`: subscriptions, search history, analytics, audit logs.

All commerce money values use `DECIMAL(12,2)`. All critical user and order records include timestamps. Foreign keys preserve consistency for catalog, cart, order, payment, delivery, wallet, and analytics records.
