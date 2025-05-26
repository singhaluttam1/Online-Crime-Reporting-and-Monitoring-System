const mongoose = require('mongoose');

const crimeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Link to the user
});

module.exports = mongoose.model('Crime', crimeSchema);