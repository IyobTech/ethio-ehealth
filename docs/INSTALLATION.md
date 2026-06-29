# Ethio E-Health - Installation & Setup Guide

## Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **PostgreSQL**: 14.0 or higher
- **Docker**: (Optional)

## Local Development Setup

### 1. Clone Repository

```bash
git clone https://github.com/IyobTech/ethio-ehealth.git
cd ethio-ehealth
```

### 2. Backend Setup

```bash
cd backend
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

Backend runs on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

## Docker Compose Setup

```bash
docker-compose up -d
```

Services available at:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`

## Environment Configuration

### Backend (.env)
```bash
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://ethio:password@localhost:5432/ethio_ehealth
JWT_SECRET=your_secret_key
```

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

## Support

- GitHub Issues: https://github.com/IyobTech/ethio-ehealth/issues
- Email: support@ethioehealth.com
