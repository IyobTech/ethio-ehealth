import { PrismaClient, UserRole, UserStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.message.deleteMany();
  await prisma.chat.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.prescriptionItem.deleteMany();
  await prisma.prescription.deleteMany();
  await prisma.medicalRecord.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.laboratoryResult.deleteMany();
  await prisma.laboratoryRequest.deleteMany();
  await prisma.labTest.deleteMany();
  await prisma.inventory.deleteMany();
  await prisma.medicine.deleteMany();
  await prisma.room.deleteMany();
  await prisma.department.deleteMany();
  await prisma.healthCenterAdmin.deleteMany();
  await prisma.doctorSchedule.deleteMany();
  await prisma.refreshToken.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.nurse.deleteMany();
  await prisma.pharmacist.deleteMany();
  await prisma.laboratoryTechnician.deleteMany();
  await prisma.laboratory.deleteMany();
  await prisma.user.deleteMany();
  await prisma.healthCenter.deleteMany();

  console.log('✅ Cleared existing data');

  // Seed Super Admin
  const superAdmin = await prisma.user.create({
    data: {
      email: 'admin@ethioehealth.com',
      phone: '+251911111111',
      password: '$2a$10$...',
      firstName: 'Ethio',
      lastName: 'Admin',
      role: UserRole.SUPER_ADMIN,
      status: UserStatus.ACTIVE,
      emailVerified: true,
      phoneVerified: true,
    },
  });

  console.log(`✅ Super Admin created: ${superAdmin.email}`);

  // Seed Health Centers
  const healthCenter1 = await prisma.healthCenter.create({
    data: {
      name: 'Addis Ababa General Hospital',
      type: 'Hospital',
      registrationNumber: 'HC-001',
      email: 'info@aagh.com',
      phone: '+251911222222',
      address: 'Addis Ababa',
      region: 'Addis Ababa',
      woreda: 'Addis Ketema',
      kebele: 'Kebele 01',
      isApproved: true,
      isActive: true,
    },
  });

  const healthCenter2 = await prisma.healthCenter.create({
    data: {
      name: 'Dire Dawa Health Center',
      type: 'Health Center',
      registrationNumber: 'HC-002',
      email: 'info@ddhc.com',
      phone: '+251911333333',
      address: 'Dire Dawa',
      region: 'Dire Dawa',
      woreda: 'Dire Dawa',
      kebele: 'Kebele 01',
      isApproved: true,
      isActive: true,
    },
  });

  console.log(`✅ Health Centers created`);

  // Seed Health Center Admin
  const hcAdmin = await prisma.user.create({
    data: {
      email: 'admin@aagh.com',
      phone: '+251911444444',
      password: '$2a$10$...',
      firstName: 'Abebe',
      lastName: 'Kebede',
      role: UserRole.HEALTH_CENTER_ADMIN,
      status: UserStatus.ACTIVE,
      emailVerified: true,
      phoneVerified: true,
    },
  });

  await prisma.healthCenterAdmin.create({
    data: {
      userId: hcAdmin.id,
      healthCenterId: healthCenter1.id,
      role: 'Admin',
    },
  });

  console.log(`✅ Health Center Admin created`);

  // Seed Doctors
  const doctorUser = await prisma.user.create({
    data: {
      email: 'doctor1@aagh.com',
      phone: '+251911555555',
      password: '$2a$10$...',
      firstName: 'Girma',
      lastName: 'Tadesse',
      role: UserRole.DOCTOR,
      status: UserStatus.ACTIVE,
      emailVerified: true,
      phoneVerified: true,
    },
  });

  const doctor = await prisma.doctor.create({
    data: {
      userId: doctorUser.id,
      licenseNumber: 'LIC-001',
      specialization: 'General Practice',
      qualifications: 'MD, Addis Ababa University',
      yearsOfExperience: 10,
      healthCenterId: healthCenter1.id,
      consultationFee: 500,
    },
  });

  console.log(`✅ Doctor created`);

  // Seed Medicines
  const medicine1 = await prisma.medicine.create({
    data: {
      name: 'Paracetamol',
      genericName: 'Acetaminophen',
      manufacturer: 'Addis Pharma',
      strength: '500mg',
      form: 'Tablet',
      dosage: '1-2 tablets every 4-6 hours',
      price: 50,
      cost: 25,
    },
  });

  const medicine2 = await prisma.medicine.create({
    data: {
      name: 'Amoxicillin',
      genericName: 'Amoxicillin',
      manufacturer: 'Addis Pharma',
      strength: '250mg',
      form: 'Capsule',
      dosage: '1 capsule every 8 hours',
      price: 150,
      cost: 75,
    },
  });

  console.log(`✅ Medicines created`);

  // Seed Departments
  const department = await prisma.department.create({
    data: {
      healthCenterId: healthCenter1.id,
      name: 'General Medicine',
      description: 'General Medicine Department',
      headDoctor: doctor.id,
    },
  });

  console.log(`✅ Department created`);

  // Seed Rooms
  await prisma.room.create({
    data: {
      healthCenterId: healthCenter1.id,
      departmentId: department.id,
      roomNumber: 'RM-001',
      roomType: 'Consultation',
      capacity: 1,
    },
  });

  console.log(`✅ Rooms created`);

  // Seed Laboratory
  const laboratory = await prisma.laboratory.create({
    data: {
      healthCenterId: healthCenter1.id,
      name: 'Main Laboratory',
      description: 'Central Laboratory',
    },
  });

  // Seed Lab Tests
  await prisma.labTest.create({
    data: {
      labId: laboratory.id,
      name: 'Blood Test',
      description: 'Complete Blood Count',
      normalRange: 'See lab report',
      unit: 'cells/μL',
      cost: 300,
      turnaroundTime: 24,
    },
  });

  console.log(`✅ Laboratory and tests created`);

  // Seed Patient
  const patientUser = await prisma.user.create({
    data: {
      email: 'patient1@example.com',
      phone: '+251911666666',
      password: '$2a$10$...',
      firstName: 'Almaz',
      lastName: 'Assefa',
      role: UserRole.PATIENT,
      status: UserStatus.ACTIVE,
      emailVerified: true,
      phoneVerified: true,
    },
  });

  const patient = await prisma.patient.create({
    data: {
      userId: patientUser.id,
      dateOfBirth: new Date('1990-01-15'),
      gender: 'FEMALE',
      nationalId: '123456789',
      healthInsuranceNumber: 'INS-001',
      region: 'Addis Ababa',
      woreda: 'Addis Ketema',
      kebele: 'Kebele 01',
      address: 'Addis Ababa',
    },
  });

  console.log(`✅ Patient created`);

  // Seed Appointment
  const appointment = await prisma.appointment.create({
    data: {
      patientId: patient.id,
      doctorId: doctor.id,
      healthCenterId: healthCenter1.id,
      appointmentDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      timeSlot: '09:00-09:30',
      reason: 'General Checkup',
      status: 'SCHEDULED',
      consultationFee: 500,
    },
  });

  console.log(`✅ Appointment created`);

  console.log('\n🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
