const Sequelize = require('sequelize');
const sequelize = require('../db')

const Project = sequelize.define('project', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Project