const Sequelize = require('sequelize');
require('dotenv').config();
const database = process.env.DB_NAME || 'test';
const username = process.env.DB_USER || 'test';
const password = process.env.DB_PASS || 'test';
const host = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;