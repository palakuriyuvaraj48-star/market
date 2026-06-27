CREATE TABLE subscriptions (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  plan_name VARCHAR(80) NOT NULL,
  status VARCHAR(40) NOT NULL,
  starts_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ends_at TIMESTAMP NULL,
  CONSTRAINT fk_subscriptions_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE search_history (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  query VARCHAR(255) NOT NULL,
  filters_json JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_search_history_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE analytics (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  metric_key VARCHAR(120) NOT NULL,
  metric_value DECIMAL(14, 2) NOT NULL,
  dimension VARCHAR(120),
  recorded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE audit_logs (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  action VARCHAR(160) NOT NULL,
  entity_type VARCHAR(120) NOT NULL,
  entity_id VARCHAR(80),
  ip_address VARCHAR(80),
  user_agent VARCHAR(500),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_audit_logs_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_products_search ON products(name, slug, availability);
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
CREATE INDEX idx_notifications_user_read ON notifications(user_id, read_at);
CREATE INDEX idx_analytics_key_time ON analytics(metric_key, recorded_at);
