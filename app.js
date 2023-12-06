// app.js
const express = require('express');
const app = express();
const port = 3000;

// Use middleware to parse JSON
app.use(express.json());

// Define routes
const indexRoutes = require('./routes/index');
const mysqlRoutes = require('./routes/mysqlRoutes');
const mongoRoutes = require('./routes/mongoRoutes');

app.use('/', indexRoutes);
app.use('/mysql', mysqlRoutes);
app.use('/mongo', mongoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
