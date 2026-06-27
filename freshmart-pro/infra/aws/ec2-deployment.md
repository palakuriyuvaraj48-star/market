# AWS EC2 Deployment

1. Create an Ubuntu 24.04 EC2 instance.
2. Open ports `80`, `443`, and SSH from trusted IPs.
3. Install Docker and Docker Compose.
4. Copy `.env.example` to `.env` and replace secrets.
5. Run `docker compose -f infra/docker/docker-compose.yml up -d --build`.
6. Attach a domain to the EC2 public IP.
7. Add TLS with Certbot or an AWS load balancer certificate.
8. Configure S3 bucket credentials for production image uploads.
