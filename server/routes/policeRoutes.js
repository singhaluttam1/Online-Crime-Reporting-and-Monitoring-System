// routes/policeRoutes.js
const express = require('express');
const router = express.Router();
const policeController = require('../controllers/policeController'); // Make sure this path is correct
const { verifyToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

// Middleware
router.use(verifyToken);
router.use(authorizeRoles('police'));

// ✅ Ensure these functions exist in the policeController
router.get('/cases', policeController.getAssignedCases);
router.put('/cases/:id/status', policeController.updateCaseStatus);
router.get('/notifications', policeController.getNotifications);

module.exports = router;