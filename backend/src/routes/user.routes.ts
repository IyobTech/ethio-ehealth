import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

// @route   GET /api/v1/users
// @desc    Get all users
// @access  Private/Admin
router.get('/', authenticate, authorize('SUPER_ADMIN'), async (req, res) => {
  res.status(200).json({
    success: true,
    data: []
  });
});

// @route   GET /api/v1/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: req.params.id, email: 'user@example.com' }
  });
});

// @route   PATCH /api/v1/users/:id
// @desc    Update user
// @access  Private
router.patch('/:id', authenticate, async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User updated successfully',
    data: { id: req.params.id }
  });
});

// @route   DELETE /api/v1/users/:id
// @desc    Delete user
// @access  Private/Admin
router.delete('/:id', authenticate, authorize('SUPER_ADMIN'), async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User deleted successfully'
  });
});

export default router;
