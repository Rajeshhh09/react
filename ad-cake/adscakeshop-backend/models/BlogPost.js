// adscakeshop-backend/models/BlogPost.js
const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  // For image uploads
  featuredImage: { type: String }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);