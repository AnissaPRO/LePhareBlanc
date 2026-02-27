const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@db:5432/lephareblanc', {
    logging: false, 
});

module.exports = sequelize;