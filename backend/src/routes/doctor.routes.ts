import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// @route   GET /api/v1/doctors
// @desc    Get all doctors
// @access  Public
router.get('/', async (req, res) => {
  res.status(200).json({
    success: true,
    data: []
  });
});

// @route   GET /api/v1/doctors/:id
// @desc    Get doctor by ID
// @access  Public
router.get('/:id', async (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: req.params.id, name: 'Doctor Name' }
  });
});

// @route   PATCH /api/v1/doctors/:id
// @desc    Update doctor profile
// @access  Private
router.patch('/:id', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Doctor profile updated',
    data: { id: req.params.id }
  });
});

export default router;
