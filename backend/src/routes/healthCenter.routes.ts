import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

// @route   GET /api/v1/health-centers
// @desc    Get all health centers
// @access  Public
router.get('/', async (req, res) => {
  res.status(200).json({
    success: true,
    data: []
  });
});

// @route   POST /api/v1/health-centers
// @desc    Create new health center
// @access  Private/SuperAdmin
router.post('/', authenticate, authorize('SUPER_ADMIN'), async (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Health center created successfully',
    data: { id: 'health-center-id' }
  });
});

// @route   GET /api/v1/health-centers/:id
// @desc    Get health center by ID
// @access  Public
router.get('/:id', async (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: req.params.id, name: 'Health Center Name' }
  });
});

export default router;
