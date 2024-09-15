const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  database: process.env.DB_NAME || 'orientacomp',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  logging: true,
  models: [path.join(__dirname, '/../models/*.model.js')],
  timezone: 'America/Argentina/Buenos_Aires',
});

module.exports = sequelize;
