const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Attribution = sequelize.define('Attributions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    desktopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hours: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: true});

module.exports = Attribution;

