// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

module.exports = router;
