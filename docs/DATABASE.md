# Ethio E-Health Database Schema Documentation

## Overview

The database uses PostgreSQL with Prisma ORM and follows relational design principles for data consistency and integrity.

## Core Models

### Users & Authentication

**User**
- Central identity model for all users
- Supports 8 role types: Super Admin, Health Center Admin, Doctor, Nurse, etc.
- Tracks authentication status and login history

**RefreshToken**
- Manages JWT refresh tokens for session persistence
- Automatic expiration handling

### Healthcare Entities

**HealthCenter**
- Represents hospitals, clinics, and health facilities
- Regional mapping (Region, Woreda, Kebele)
- Approval workflow for registration

**Doctor**
- Extends User model with medical credentials
- Tracks specialization, license, and experience
- Linked to schedule slots

**Patient**
- Extends User model with health information
- Blood type, allergies, chronic diseases tracking
- Insurance integration

## Database Relationships

Optimized for common queries with proper indexes and constraints.
