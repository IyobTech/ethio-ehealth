# Ethio E-Health - Architecture Overview

## System Architecture

Three-tier architecture:
- **Client Layer**: Next.js Frontend
- **API Layer**: Express.js Backend
- **Data Layer**: PostgreSQL + Redis

## Technology Stack

### Frontend
- Next.js 14
- React 18
- TailwindCSS
- TypeScript
- Zustand (State Management)
- React Query (Data Fetching)

### Backend
- Express.js
- Node.js 18
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication

### Infrastructure
- Docker & Docker Compose
- Nginx (Reverse Proxy)
- PostgreSQL 15
- Redis 7

## Module Structure

### Frontend
```
frontend/src/
├── app/               # Next.js app directory
├── components/        # React components
├── hooks/             # Custom hooks
├── lib/               # API client
├── store/             # State management
├── i18n/              # Internationalization
└── types/             # TypeScript definitions
```

### Backend
```
backend/src/
├── routes/            # API endpoints
├── controllers/        # Request handlers
├── services/          # Business logic
├── middleware/        # Auth, validation
├─��� types/             # TypeScript interfaces
└── prisma/            # Database schema
```

## Security Architecture

1. **Authentication**: JWT tokens with refresh mechanism
2. **Authorization**: Role-based access control (RBAC)
3. **Data Protection**: HTTPS/TLS encryption
4. **Input Validation**: Joi schema validation
5. **Audit Logging**: All actions logged

## Performance Optimization

1. **Database**: Connection pooling, indexes, caching
2. **API**: Rate limiting, response compression
3. **Frontend**: Code splitting, image optimization
4. **Caching**: Redis for sessions and frequent queries
