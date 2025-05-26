// routes/crimeRoutes.js
const express = require('express');
const router = express.Router();
const { reportCrime, getAllCrimes, getCrimeById } = require('../controllers/crimeController');
const { verifyToken } = require('../middleware/authMiddleware');

// Use the destructured functions directly
router.get('/all', getAllCrimes);
router.post('/report', verifyToken, reportCrime);
router.get('/:id', getCrimeById);

module.exports = router;