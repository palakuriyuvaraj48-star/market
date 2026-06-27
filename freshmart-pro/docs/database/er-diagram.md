# ER Diagram Description

```text
users ──< user_roles >── roles
users ──< addresses
users ──< orders ──< order_items >── products
users ── cart ──< cart_items >── products
users ── wishlist ──< wishlist_items >── products
users ── wallets ──< cashback_history

categories ──< sub_categories
categories ──< products >── brands
products ──< product_images
products ──< inventory
products ──< reviews
products ──< ratings

vendors ──< vendor_products >── products
vendors ──< inventory
vendors ──< order_items

orders ──< payments ──< transactions
orders ── deliveries >── delivery_partners
orders >── coupons

users ──< notifications
users ──< search_history
users ──< audit_logs
analytics stores time-series operational metrics
```
