const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class Group extends Model { }
Group.init({
    name: {type:  DataTypes.STRING, unique: true},
}, { sequelize, modelName: 'group' });

module.exports = { Group };