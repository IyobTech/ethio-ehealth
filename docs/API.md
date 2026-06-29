# Ethio E-Health - API Documentation

## Authentication Endpoints

### Register User
```
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "phone": "+251911234567",
  "password": "secure_password",
  "firstName": "John",
  "lastName": "Doe",
  "role": "PATIENT"
}

Response: 201 Created
```

### Login
```
POST /api/v1/auth/login

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response: 200 OK
{
  "token": "jwt_token",
  "refreshToken": "refresh_token"
}
```

## Patients Endpoints

### Get All Patients
```
GET /api/v1/patients
Authorization: Bearer {token}
```

### Create Appointment
```
POST /api/v1/appointments
Authorization: Bearer {token}

{
  "patientId": "patient-id",
  "doctorId": "doctor-id",
  "healthCenterId": "health-center-id",
  "appointmentDate": "2024-07-15",
  "timeSlot": "09:00-09:30",
  "reason": "General Checkup"
}
```

## Rate Limiting

- General: 100 requests per 15 minutes per IP
- Auth: 5 login attempts per 15 minutes per IP
