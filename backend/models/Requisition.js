const mongoose = require('mongoose');

const requisitionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // General Request or Leave Request
  department: { type: String }, // For General Requests
  leaveType: { type: String }, // For Leave Requests
  purpose: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  time: { type: String },
  reason: { type: String, required: true },
  dateRequested: { type: Date, default: Date.now },
});

const Requisition = mongoose.model('Requisition', requisitionSchema);

module.exports = Requisition;