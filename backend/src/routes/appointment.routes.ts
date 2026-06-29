import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// @route   GET /api/v1/appointments
// @desc    Get all appointments
// @access  Private
router.get('/', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    data: []
  });
});

// @route   POST /api/v1/appointments
// @desc    Create new appointment
// @access  Private
router.post('/', authenticate, async (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Appointment created successfully',
    data: { id: 'appointment-id' }
  });
});

// @route   GET /api/v1/appointments/:id
// @desc    Get appointment by ID
// @access  Private
router.get('/:id', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: req.params.id }
  });
});

// @route   PATCH /api/v1/appointments/:id
// @desc    Update appointment
// @access  Private
router.patch('/:id', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Appointment updated',
    data: { id: req.params.id }
  });
});

export default router;
