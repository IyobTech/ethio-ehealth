# Ethio E-Health Platform - AI Powered National Healthcare Management System

A comprehensive enterprise-grade full-stack web application designed to digitize and modernize healthcare management throughout Ethiopia.

## 🏥 Project Overview

Ethio E-Health is a cloud-based healthcare platform that replaces paper-based processes with a secure, modern digital solution. It supports:
- Private Clinics
- Government Hospitals
- Health Centers
- Health Posts
- Laboratories
- Pharmacies
- Diagnostic Centers
- Future nationwide healthcare services

## 🚀 Key Features

### User Roles & Dashboards
- **Super Admin**: Complete system management, analytics, and oversight
- **Health Center Admin**: Manage staff, departments, inventory, billing
- **Doctor**: Patient management, prescriptions, AI diagnosis assistant
- **Nurse**: Vitals monitoring, patient queue, medicine administration
- **Laboratory**: Request management, result uploads, report generation
- **Pharmacy**: Inventory, prescription verification, medicine dispensing
- **Receptionist**: Patient registration, appointments, queue management
- **Patient**: Health profile, appointment booking, lab results, consultations

### AI Features
- Medical Chatbot & Symptoms Checker
- Disease Prediction
- Medicine Explanation & Drug Interaction Checker
- Prescription & Lab Report Analysis
- Medical OCR & Image Analysis
- Voice Assistant & Appointment Recommendation
- Emergency Detection & Health Education
- Pregnancy & Child Growth Monitoring

### Core Functionality
- Modern dashboard with real-time analytics
- Appointment & queue management
- Medical records digitization
- Laboratory & radiology management
- Prescription generation & tracking
- Video consultation capabilities
- Payment integration (Telebirr, CBE Birr, Chapa, Stripe, PayPal)
- Subscription system
- Multi-language support (English, Amharic, Afaan Oromo)
- Dark/Light mode
- WCAG accessibility compliance

## 💻 Technology Stack

### Frontend
- **React** with Next.js
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Query** for data fetching
- **Zustand** for state management
- **React Hook Form** for form handling

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **PostgreSQL** database
- **Prisma ORM** for database operations

### Infrastructure
- **Docker** for containerization
- **Nginx** for reverse proxy
- **Firebase Storage** & **Cloudinary** for file storage
- **Socket.io** for real-time features
- **Vercel & Railway** for deployment

### AI & Integrations
- **OpenAI API** for AI features
- **Local AI Model** support
- Email, SMS, and Push notifications

## 📁 Project Structure

```
ethio-ehealth/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App directory (Next.js 13+)
│   ├── components/          # Reusable components
│   ├── pages/               # Legacy pages (if needed)
│   ├── lib/                 # Utilities and helpers
│   ├── styles/              # Global styles
│   ├── public/              # Static assets
│   ├── i18n/                # Internationalization (i18n)
│   ├── hooks/               # Custom React hooks
│   ├── store/               # Zustand state management
│   ├── types/               # TypeScript types
│   ├── api/                 # API client/service
│   ├── config/              # Configuration files
│   ├── next.config.js       # Next.js config
│   ├── tsconfig.json        # TypeScript config
│   ├── tailwind.config.js   # TailwindCSS config
│   ├── package.json         # Dependencies
│   └── .env.example         # Environment variables example
│
├── backend/                 # Express.js backend application
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Custom middleware
│   │   ├── validators/      # Input validation
│   │   ├── utils/           # Utility functions
│   │   ├── config/          # Configuration
│   │   ├── types/           # TypeScript types
│   │   ├── ai/              # AI integration
│   │   ├── emails/          # Email templates
│   │   └── app.ts           # Express app setup
│   ├── prisma/              # Database schema
│   │   ├── schema.prisma    # Prisma schema
│   │   └── migrations/      # Database migrations
│   ├── tests/               # Test files
│   ├── .env.example         # Environment variables
│   ├── tsconfig.json        # TypeScript config
│   ├── package.json         # Dependencies
│   └── Dockerfile           # Docker configuration
│
├── docker-compose.yml       # Docker compose configuration
├── nginx.conf               # Nginx configuration
├── .github/                 # GitHub workflows
│   └── workflows/           # CI/CD pipelines
├── docs/                    # Documentation
│   ├── API.md              # API documentation
│   ├── DATABASE.md         # Database schema
│   ├── DEPLOYMENT.md       # Deployment guide
│   ├── INSTALLATION.md     # Installation guide
│   └── ARCHITECTURE.md     # Architecture overview
└── .gitignore              # Git ignore rules
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ & npm/yarn
- PostgreSQL 14+
- Docker & Docker Compose (optional)
- OpenAI API key
- Firebase & Cloudinary accounts

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/IyobTech/ethio-ehealth.git
   cd ethio-ehealth
   ```

2. **Set up environment variables**
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env.local
   ```

3. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

4. **Set up database**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start development servers**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm run dev
   
   # Terminal 2: Frontend
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/api-docs

### Docker Setup

```bash
docker-compose up -d
```

## 📚 Documentation

- [API Documentation](./docs/API.md) - Complete REST API endpoints
- [Database Schema](./docs/DATABASE.md) - PostgreSQL schema design
- [Installation Guide](./docs/INSTALLATION.md) - Detailed setup instructions
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment
- [Architecture](./docs/ARCHITECTURE.md) - System architecture overview

## 🔐 Security Features

- HTTPS/TLS encryption
- JWT & Refresh Token authentication
- Role-Based Access Control (RBAC)
- OAuth Google Login
- Input validation & sanitization
- Rate limiting
- CSRF & XSS protection
- SQL injection prevention
- Secure file upload
- Audit logging
- Encryption of sensitive data

## 🌍 Internationalization (i18n)

Supports:
- English (en)
- Amharic (am)
- Afaan Oromo (om)

Users can switch languages instantly across all pages.

## 🇪🇹 Ethiopian Features

- Ethiopian Calendar support
- Gregorian Calendar support
- Ethiopian phone number validation
- Regional & woreda/kebele support
- National ID support
- Health Extension Program integration
- Ethiopian holiday calendar
- Local payment methods (Telebirr, CBE Birr, Chapa)

## 📊 Dashboard Analytics

- Revenue metrics
- Patient statistics
- Doctor performance
- Appointment analytics
- Disease tracking
- Medicine usage
- Laboratory statistics
- AI usage metrics
- Growth charts & heatmaps

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Support

For issues, questions, or suggestions:
- Create an issue on GitHub
- Contact: support@ethioehealth.com

## 👥 Team

- **Project Lead**: IyobTech
- **Developers**: Full-stack development team
- **AI Team**: Machine learning & AI specialists
- **DevOps**: Infrastructure & deployment team

---

**Built with ❤️ for Ethiopian Healthcare Digitization**
