// controllers/mongoController.js
const mongoose = require('mongoose');
const Manager = require('../models/mongoModel');

// Create a new manager
exports.createManager = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const newManager = new Manager({ name, salary });
    const savedManager = await newManager.save();
    res.json(savedManager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all managers
exports.getAllManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    res.json(managers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a manager by ID
exports.getManagerById = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);
    res.json(manager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a manager by ID
exports.updateManagerById = async (req, res) => {
  try {
    const updatedManager = await Manager.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedManager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a manager by ID
exports.deleteManagerById = async (req, res) => {
  try {
    const deletedManager = await Manager.findByIdAndDelete(req.params.id);
    res.json(deletedManager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
