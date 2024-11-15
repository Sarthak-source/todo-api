// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create a new to-do
router.post('/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all to-dos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single to-do by ID
router.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'To-Do not found' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a to-do by ID
router.put('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) return res.status(404).json({ message: 'To-Do not found' });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a to-do by ID
router.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: 'To-Do not found' });
    res.json({ message: 'To-Do deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
