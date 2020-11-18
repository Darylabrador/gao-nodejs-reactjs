const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Clients = sequelize.define('Clients', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Clients;