// server.js
require('events').EventEmitter.defaultMaxListeners = 20;
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const policeRoutes = require('./routes/policeRoutes');
const crimeRoutes = require('./routes/crimeRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const shareRoutes = require('./routes/shareRoutes');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/police', policeRoutes);
app.use('/api/crime', crimeRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/share', shareRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
