# AWS EC2 Deployment Guide

This guide covers deployment of FreshMart Pro on an AWS EC2 instance.

## 1. Instance Selection
- **Recommended OS:** Ubuntu 22.04 LTS
- **Instance Type:** `t3.large` (at least 2 vCPUs and 8GB RAM recommended for hosting React frontend, Spring Boot backend, and MySQL database simultaneously).

## 2. Security Group Configuration
Open the following inbound ports:
- `22`: SSH Access (restrict to your IP)
- `80`: HTTP (redirected to HTTPS)
- `443`: HTTPS (served by Nginx reverse proxy)
- `8080`: Spring Boot Application (optional, keep closed if proxying through port 80/443)

## 3. Server Setup & Docker Installation

SSH into the instance and install Docker:
```bash
sudo apt update
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-compose-plugin
sudo usermod -aG docker $USER
```

## 4. Cloned Repository & Run App
Clone the repository and copy the environment variables:
```bash
git clone https://github.com/your-username/freshmart-pro.git
cd freshmart-pro
cp .env.example .env
# Edit .env with production credentials
```

Build and start the application:
```bash
docker compose -f infra/docker/docker-compose.yml up --build -d
```

## 5. SSL Certificate Setup
Install Certbot for SSL:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d freshmart.pro -d www.freshmart.pro
```
This will automatically update the Nginx server configuration on the host or map to the Nginx docker proxy.
