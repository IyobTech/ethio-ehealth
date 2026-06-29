import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// @route   GET /api/v1/patients
// @desc    Get all patients
// @access  Private
router.get('/', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    data: []
  });
});

// @route   POST /api/v1/patients
// @desc    Create new patient
// @access  Private
router.post('/', authenticate, async (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Patient created successfully',
    data: { id: 'patient-id' }
  });
});

// @route   GET /api/v1/patients/:id
// @desc    Get patient by ID
// @access  Private
router.get('/:id', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: req.params.id, name: 'Patient Name' }
  });
});

export default router;
