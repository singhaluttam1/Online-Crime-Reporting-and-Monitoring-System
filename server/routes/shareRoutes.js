// server/routes/shareRoutes.js

const express = require('express');
const router = express.Router();
const shareController = require('../controllers/shareController');

// Add routes
router.get('/all', shareController.getAllSharedReports);
router.post('/send', shareController.shareReport);

module.exports = router;