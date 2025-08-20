// adscakeshop-backend/models/CustomOrder.js
const mongoose = require('mongoose');

const customOrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventType: { type: String, required: true },
  flavor: { type: String, required: true },
  size: { type: String, required: true },
  designDescription: { type: String, required: true },
  specialRequests: { type: String },
  // For image uploads
  designImage: { type: String },
  status: { type: String, default: 'Submitted' }, // Submitted, In Progress, Completed, Cancelled
  submissionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CustomOrder', customOrderSchema);