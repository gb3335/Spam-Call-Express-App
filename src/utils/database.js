const Sequelize = require('sequelize');

const database = 'test';
const username = 'test';
const password = 'test1234';
const host = 'localhost';

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