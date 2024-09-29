const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const { commonModelOptions } = require('../config/modelOptions');

const Genero = sequelize.define(
  'Genero',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    ...commonModelOptions,
    tableName: 'Generos',
  },
);

module.exports = Genero;