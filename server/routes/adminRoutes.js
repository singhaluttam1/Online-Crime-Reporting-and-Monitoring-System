// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

// Apply middleware correctly
router.use(verifyToken);
router.use(authorizeRoles('admin'));

router.get('/users', adminController.getAllUsers);
router.put('/users/:id', adminController.updateUserRole);
router.delete('/users/:id', adminController.deleteUser);
router.get('/logs', adminController.getSystemLogs);

module.exports = router;