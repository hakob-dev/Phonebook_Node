const { Sequelize } = require('sequelize');
//imitating sql in RAM
const sequelize = new Sequelize("sqlite::memory:",{ logging: false});

module.exports = { sequelize }