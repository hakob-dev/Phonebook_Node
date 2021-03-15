const { Sequelize } = require('sequelize');
//imitating sql in RAM
const sequelize = new Sequelize("sqlite::memory:");

module.exports = { sequelize }