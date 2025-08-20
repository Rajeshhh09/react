// adscakeshop-backend/models/Cake.js
const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  flavor: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  ingredients: [{ type: String }],
  size: { type: String },
  serves: { type: String },
  // For image uploads, you might store the filename or URL
  image: { type: String } 
});

module.exports = mongoose.model('Cake', cakeSchema);