// models/mongoModel.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/proj2023MongoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
