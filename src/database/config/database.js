const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');
const applyAssociations = require('../utils/associations');

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: false,
  models: [path.join(__dirname, '/../models/*.model.js')],
  timezone: '-03:00',
});

sequelize.afterBulkSync(() => {
  applyAssociations(sequelize);
});

module.exports = sequelize;
