const express = require('express');
const userRoutes = require('./routes/userRoutes');
const spamRoutes = require('./routes/spamRoutes');
const sequelize = require('./utils/database');

// Sync the models
// async function syncModels() {
//   try {
//     await sequelize.sync();
//     console.log('Models synced successfully');
//   } catch (error) {
//     console.error('Failed to sync models:', error);
//   }
// }
// syncModels();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
// database.connect();

// Use the user and spam routes
app.use('/users', userRoutes);
app.use('/spam', spamRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;