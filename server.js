// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);

// Connect to MongoDB
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
