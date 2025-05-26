// models/Department.js
import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  state: String,
  district: String,
  officers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export default mongoose.model('Department', departmentSchema);