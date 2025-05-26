// models/Criminal.js
import mongoose from 'mongoose';

const criminalSchema = new mongoose.Schema({
  name: String,
  records: [String],
  associatedCrimes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Crime' }],
});

export default mongoose.model('Criminal', criminalSchema);
