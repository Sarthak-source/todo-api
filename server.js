// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);



const uri = "mongodb+srv://sarthakcmkal:9l2F5nSoZHcSESjF@cluster0.hnoh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
