// models/todo.js
const mongoose = require('mongoose');

// Define the schema
const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model('Todo', TodoSchema);
