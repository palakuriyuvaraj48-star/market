INSERT INTO users (full_name, email, phone, password_hash, email_verified, phone_verified) VALUES
('FreshMart Customer', 'customer@freshmart.pro', '+919000000001', '$2a$10$9aD4NQJgeYCq6OxTz7cBeuZ2GlFoBsXroKYyaXYP2SBuwQtgfln7S', TRUE, TRUE),
('FreshMart Admin', 'admin@freshmart.pro', '+919000000002', '$2a$10$9aD4NQJgeYCq6OxTz7cBeuZ2GlFoBsXroKYyaXYP2SBuwQtgfln7S', TRUE, TRUE),
('FreshMart Vendor', 'vendor@freshmart.pro', '+919000000003', '$2a$10$9aD4NQJgeYCq6OxTz7cBeuZ2GlFoBsXroKYyaXYP2SBuwQtgfln7S', TRUE, TRUE),
('FreshMart Delivery', 'delivery@freshmart.pro', '+919000000004', '$2a$10$9aD4NQJgeYCq6OxTz7cBeuZ2GlFoBsXroKYyaXYP2SBuwQtgfln7S', TRUE, TRUE);

INSERT INTO user_roles (user_id, role_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

INSERT INTO addresses (user_id, label, recipient_name, phone, line1, city, state, postal_code, default_address) VALUES
(1, 'Home', 'FreshMart Customer', '+919000000001', '221B Green Avenue', 'Bengaluru', 'Karnataka', '560001', TRUE);

INSERT INTO wallets (user_id, balance) VALUES (1, 250.00), (2, 0.00), (3, 0.00), (4, 0.00);

INSERT INTO vendors (user_id, business_name, gst_number, rating) VALUES
(3, 'FreshMart Vendor Supplies', '29ABCDE1234F1Z5', 4.7);

INSERT INTO delivery_partners (user_id, vehicle_type, vehicle_number, available, earnings) VALUES
(4, 'Bike', 'KA01FM2026', TRUE, 1840.00);
