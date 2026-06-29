# Ethio E-Health - Deployment Guide

## Production Deployment

### Using Railway.app

1. **Connect Repository**
   - Push code to GitHub
   - Connect GitHub repository to Railway

2. **Backend Deployment**
   ```
   Service: Node.js
   Build Command: npm run build
   Start Command: npm start
   Port: 5000
   ```

3. **Frontend Deployment**
   ```
   Service: Node.js
   Build Command: npm run build
   Start Command: npm start
   Port: 3000
   ```

4. **Database**
   ```
   Service: PostgreSQL
   Version: 15
   ```

### Using Vercel (Frontend)

1. **Import Project**
   - Connect GitHub to Vercel
   - Select frontend directory: `/frontend`

2. **Environment Variables**
   ```
   NEXT_PUBLIC_API_URL=https://api.ethioehealth.com
   ```

### Docker Deployment

```bash
docker build -t ethio-ehealth-backend ./backend
docker build -t ethio-ehealth-frontend ./frontend
docker-compose -f docker-compose.prod.yml up -d
```

## SSL/TLS Setup

Enable HTTPS in production with proper SSL certificates.

## Backup Strategy

```bash
pg_dump ethio_ehealth > backup_$(date +%Y%m%d).sql
psql ethio_ehealth < backup_20240101.sql
```
