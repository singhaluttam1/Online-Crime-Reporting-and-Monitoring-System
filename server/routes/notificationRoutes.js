// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Example routes
router.get('/all', notificationController.getAllNotifications);
router.post('/send', notificationController.sendNotification);

module.exports = router;