// adscakeshop-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/adscakeshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Simple test route
app.get('/', (req, res) => {
  res.send('AD\'s Cake Shop Backend Server is Running!');
});

// Routes will be added here later

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});