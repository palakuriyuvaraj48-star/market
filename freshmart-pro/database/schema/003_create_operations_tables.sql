CREATE TABLE payments (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL,
  provider VARCHAR(40) NOT NULL,
  method VARCHAR(40) NOT NULL,
  status VARCHAR(40) NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  provider_order_id VARCHAR(120),
  provider_payment_id VARCHAR(120),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_payments_order FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE transactions (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  payment_id BIGINT NOT NULL,
  transaction_reference VARCHAR(140) NOT NULL UNIQUE,
  status VARCHAR(40) NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  raw_response JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_transactions_payment FOREIGN KEY (payment_id) REFERENCES payments(id)
);

CREATE TABLE reviews (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  title VARCHAR(160) NOT NULL,
  body TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_reviews_user FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_reviews_product FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE ratings (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  rating INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, product_id),
  CONSTRAINT fk_ratings_user FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_ratings_product FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE notifications (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  title VARCHAR(160) NOT NULL,
  message VARCHAR(500) NOT NULL,
  type VARCHAR(60) NOT NULL,
  read_at TIMESTAMP NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_notifications_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE delivery_partners (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL UNIQUE,
  vehicle_type VARCHAR(60) NOT NULL,
  vehicle_number VARCHAR(40) NOT NULL,
  available BOOLEAN NOT NULL DEFAULT TRUE,
  current_latitude DECIMAL(10, 7),
  current_longitude DECIMAL(10, 7),
  earnings DECIMAL(12, 2) NOT NULL DEFAULT 0,
  CONSTRAINT fk_delivery_partners_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE deliveries (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL UNIQUE,
  delivery_partner_id BIGINT,
  status VARCHAR(40) NOT NULL,
  pickup_address VARCHAR(255) NOT NULL,
  drop_address VARCHAR(255) NOT NULL,
  eta_minutes INT NOT NULL DEFAULT 10,
  delivered_at TIMESTAMP NULL,
  CONSTRAINT fk_deliveries_order FOREIGN KEY (order_id) REFERENCES orders(id),
  CONSTRAINT fk_deliveries_partner FOREIGN KEY (delivery_partner_id) REFERENCES delivery_partners(id)
);

CREATE TABLE wallets (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL UNIQUE,
  balance DECIMAL(12, 2) NOT NULL DEFAULT 0,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_wallets_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE cashback_history (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  wallet_id BIGINT NOT NULL,
  order_id BIGINT,
  amount DECIMAL(12, 2) NOT NULL,
  reason VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_cashback_wallet FOREIGN KEY (wallet_id) REFERENCES wallets(id),
  CONSTRAINT fk_cashback_order FOREIGN KEY (order_id) REFERENCES orders(id)
);
