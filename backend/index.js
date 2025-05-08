const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
const authRoutes = require('./routes/auth'); // Authentication routes
const requisitionRoutes = require('./routes/requisition'); // Requisition routes
app.use('/api', authRoutes);
app.use('/api/requisitions', requisitionRoutes); // Add requisition routes

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));