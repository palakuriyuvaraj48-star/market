# Environment Variables Reference

FreshMart Pro relies on standard environments configured in `.env`. Below are details of each configuration block.

## Database Variables
- `DB_HOST`: Host address of the MySQL database (e.g., `mysql` inside docker-compose, `localhost` for local debugging).
- `DB_PORT`: Database port (default `3306`).
- `DB_NAME`: Database name (default `freshmart_db`).
- `DB_USER`: Database login user.
- `DB_PASSWORD`: Database login password.

## Security & Authentication Variables
- `JWT_SECRET`: High-entropy key used to sign JWT access tokens.
- `JWT_EXPIRATION`: Access token time-to-live in milliseconds (default `900000` - 15 minutes).
- `JWT_REFRESH_EXPIRATION`: Refresh token time-to-live in milliseconds (default `604800000` - 7 days).
- `GOOGLE_CLIENT_ID`: OAuth2 Client ID for Google login capability.
- `GOOGLE_CLIENT_SECRET`: OAuth2 Client Secret for Google login capability.

## External Services Integration
- `RAZORPAY_KEY_ID`: Razorpay public API key ID for payment initialization.
- `RAZORPAY_KEY_SECRET`: Razorpay private key secret for verify payments.
- `AWS_S3_BUCKET_NAME`: Target S3 bucket name for product images storage.
- `AWS_ACCESS_KEY_ID`: IAM user AWS access key.
- `AWS_SECRET_ACCESS_KEY`: IAM user AWS secret key.

## Mail Configurations
- `MAIL_HOST`: SMTP server host address.
- `MAIL_PORT`: SMTP server port (usually `587` or `465`).
- `MAIL_USERNAME`: Email address sending notifications.
- `MAIL_PASSWORD`: Authenticating password or application app key.
