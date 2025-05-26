// controllers/crimeController.js
const Crime = require('../models/Crime.js'); // Make sure this path is correct

// Report a new crime
const reportCrime = async (req, res) => {
  try {
    const { type, description, location } = req.body;

    // Validate required fields
    if (!type || !description || !location) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const crime = new Crime({
      type,
      description,
      location,
      reporter: req.user.id, // coming from verifyToken middleware
    });

    await crime.save();
    res.status(201).json({ message: 'Crime reported successfully', crime });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to report crime' });
  }
};

// Get all crimes
const getAllCrimes = async (req, res) => {
  try {
    const crimes = await Crime.find().populate('reporter', 'name email'); // Include reporter info
    res.status(200).json(crimes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch crimes' });
  }
};

// Get crime by ID
const getCrimeById = async (req, res) => {
  try {
    const crime = await Crime.findById(req.params.id).populate('reporter', 'name email');
    if (!crime) {
      return res.status(404).json({ error: 'Crime not found' });
    }
    res.status(200).json(crime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch crime' });
  }
};

module.exports = {
  reportCrime,
  getAllCrimes,
  getCrimeById,
};