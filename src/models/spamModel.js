const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Spam extends Model {}

Spam.init({
  // Model attributes are defined here
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  spamReports: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Spam' // We need to choose the model name
});

module.exports = Spam;