// routes/mysqlRoutes.js
const express = require('express');
const router = express.Router();
const mysqlController = require('../controllers/mysqlController');

// Routes for MySQL CRUD operations
router.get('/products', mysqlController.getAllProducts);
router.get('/products/:id', mysqlController.getProductById);
router.post('/products', mysqlController.createProduct);
router.put('/products/:id', mysqlController.updateProduct);
router.delete('/products/:id', mysqlController.deleteProduct);

module.exports = router;
