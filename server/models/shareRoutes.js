// models/ShareRoutes.js
import mongoose from 'mongoose';

const shareRoutesSchema = new mongoose.Schema({
  senderState: String,
  receiverState: String,
  caseDetails: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model('ShareRoutes', shareRoutesSchema);
