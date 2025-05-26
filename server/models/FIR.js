
// models/FIR.js
import mongoose from 'mongoose';

const firSchema = new mongoose.Schema({
  crime: { type: mongoose.Schema.Types.ObjectId, ref: 'Crime' },
  complainant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['Pending', 'Resolved'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('FIR', firSchema);