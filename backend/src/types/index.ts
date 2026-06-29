// User Types
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  HEALTH_CENTER_ADMIN = 'HEALTH_CENTER_ADMIN',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  LABORATORY_TECHNICIAN = 'LABORATORY_TECHNICIAN',
  PHARMACIST = 'PHARMACIST',
  RECEPTIONIST = 'RECEPTIONIST',
  PATIENT = 'PATIENT'
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  DELETED = 'DELETED'
}

export interface IUser {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Patient Types
export enum BloodType {
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-'
}

export interface IPatient extends IUser {
  dateOfBirth: Date;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  bloodType?: BloodType;
  healthInsuranceNumber?: string;
}

// Appointment Types
export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW'
}

export interface IAppointment {
  id: string;
  patientId: string;
  doctorId: string;
  healthCenterId: string;
  appointmentDate: Date;
  timeSlot: string;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Medical Record Types
export interface IMedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  visitDate: Date;
  diagnosis: string;
  treatment: string;
  prescription?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
