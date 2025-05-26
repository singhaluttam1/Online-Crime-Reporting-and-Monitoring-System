const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/constants');

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword, role });
    const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ token, user: { id: newUser._id, email: newUser.email, role: newUser.role } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
};

// Get current user
exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};