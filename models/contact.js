const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class Contact extends Model { }
Contact.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: {type:  DataTypes.STRING, unique: true},
}, { sequelize, modelName: 'contact' });

module.exports = { Contact };