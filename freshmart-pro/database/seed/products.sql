INSERT INTO brands (name, slug, active) VALUES
('FreshMart Farms', 'freshmart-farms', TRUE),
('Daily Basket', 'daily-basket', TRUE),
('Organic Valley', 'organic-valley', TRUE),
('Kitchen Gold', 'kitchen-gold', TRUE);

INSERT INTO products (
  name, slug, description, short_description, category_id, brand_id, sku, barcode, weight,
  price, discount_price, stock_quantity, availability, rating, review_count, delivery_time,
  trending, featured, recommended
) VALUES
('Tomato', 'tomato', 'Fresh red tomatoes sourced from partner farms.', 'Fresh red tomatoes', 1, 1, 'VEG-TOM-001', '890100000001', '1 kg', 40, 32, 250, 'IN_STOCK', 4.5, 1230, '10 min', TRUE, TRUE, TRUE),
('Onion', 'onion', 'Crisp red onions for everyday cooking.', 'Crisp red onions', 1, 1, 'VEG-ONI-001', '890100000002', '1 kg', 35, 29, 300, 'IN_STOCK', 4.4, 980, '10 min', TRUE, FALSE, TRUE),
('Apple', 'apple', 'Premium sweet apples with natural crunch.', 'Premium apples', 2, 1, 'FRU-APL-001', '890100000003', '1 kg', 180, 149, 120, 'IN_STOCK', 4.8, 1670, '10 min', TRUE, TRUE, TRUE),
('Banana', 'banana', 'Naturally ripened bananas for daily energy.', 'Ripe bananas', 2, 1, 'FRU-BAN-001', '890100000004', '1 dozen', 60, 49, 180, 'IN_STOCK', 4.6, 870, '10 min', TRUE, FALSE, TRUE),
('Basmati Rice', 'basmati-rice', 'Long grain basmati rice with rich aroma.', 'Long grain rice', 5, 4, 'RIC-BAS-001', '890100000005', '1 kg', 120, 104, 500, 'IN_STOCK', 4.7, 1420, '15 min', TRUE, TRUE, TRUE),
('Wheat Flour', 'wheat-flour', 'Whole wheat flour for soft rotis.', 'Whole wheat atta', 7, 4, 'FLO-WHE-001', '890100000006', '1 kg', 55, 49, 400, 'IN_STOCK', 4.5, 760, '15 min', FALSE, TRUE, TRUE),
('Fresh Milk', 'fresh-milk', 'Pasteurized milk delivered chilled.', 'Chilled fresh milk', 4, 2, 'DAI-MIL-001', '890100000007', '1 litre', 68, 62, 240, 'IN_STOCK', 4.7, 1320, '8 min', TRUE, TRUE, TRUE),
('Paneer', 'paneer', 'Soft paneer block for curries and grilling.', 'Soft paneer', 4, 2, 'DAI-PAN-001', '890100000008', '200 g', 120, 105, 80, 'IN_STOCK', 4.6, 640, '8 min', FALSE, TRUE, TRUE),
('Almonds', 'almonds', 'Crunchy premium almonds for healthy snacking.', 'Premium almonds', 9, 3, 'DRY-ALM-001', '890100000009', '250 g', 360, 319, 90, 'IN_STOCK', 4.8, 930, '15 min', TRUE, TRUE, TRUE),
('Orange Juice', 'orange-juice', 'Refreshing fruit beverage for every meal.', 'Refreshing juice', 17, 2, 'BEV-ORG-001', '890100000010', '1 litre', 110, 92, 160, 'IN_STOCK', 4.3, 520, '10 min', FALSE, FALSE, TRUE);

INSERT INTO product_images (product_id, url, alt_text, primary_image) VALUES
(1, 'https://images.unsplash.com/photo-1546470427-e5ac89a228b5?auto=format&fit=crop&w=900&q=80', 'Fresh tomatoes', TRUE),
(2, 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=900&q=80', 'Red onions', TRUE),
(3, 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80', 'Red apples', TRUE),
(4, 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=900&q=80', 'Bananas', TRUE),
(5, 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80', 'Basmati rice', TRUE),
(6, 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80', 'Wheat flour', TRUE),
(7, 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80', 'Fresh milk', TRUE),
(8, 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80', 'Paneer cubes', TRUE),
(9, 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&w=900&q=80', 'Almonds', TRUE),
(10, 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80', 'Orange juice', TRUE);
