$ErrorActionPreference = "Stop"
docker compose -f "$PSScriptRoot\..\docker\docker-compose.yml" up --build
