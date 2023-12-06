// routes/mongoRoutes.js
const express = require('express');
const router = express.Router();
const mongoController = require('../controllers/mongoController');

// Create a new manager
router.post('/managers', mongoController.createManager);

// Get all managers
router.get('/managers', mongoController.getAllManagers);

// Get a manager by ID
router.get('/managers/:id', mongoController.getManagerById);

// Update a manager by ID
router.put('/managers/:id', mongoController.updateManagerById);

// Delete a manager by ID
router.delete('/managers/:id', mongoController.deleteManagerById);

module.exports = router;
