// controllers/mysqlController.js
const mysqlModel = require('../models/mysqlModel');

// Get all products
exports.getAllProducts = (req, res) => {
  mysqlModel.query('SELECT * FROM product', (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(results);
  });
};

// Get a product by ID
exports.getProductById = (req, res) => {
  const productId = req.params.id;
  mysqlModel.query('SELECT * FROM product WHERE pid = ?', [productId], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(results[0]);
  });
};

// Create a new product
exports.createProduct = (req, res) => {
  const { productdesc, supplier } = req.body;
  mysqlModel.query(
    'INSERT INTO product (productdesc, supplier) VALUES (?, ?)',
    [productdesc, supplier],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'Product created successfully', productId: results.insertId });
    }
  );
};

// Update a product by ID
exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const { productdesc, supplier } = req.body;
  mysqlModel.query(
    'UPDATE product SET productdesc = ?, supplier = ? WHERE pid = ?',
    [productdesc, supplier, productId],
    (error) => {
      if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(200).json({ message: 'Product updated successfully' });
    }
  );
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  mysqlModel.query('DELETE FROM product WHERE pid = ?', [productId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};
