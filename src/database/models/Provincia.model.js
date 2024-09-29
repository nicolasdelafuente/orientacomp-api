const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const { commonModelOptions } = require('../config/modelOptions');

const Provincia = sequelize.define(
  'Provincia',
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
    id_pais: {
      type: DataTypes.BIGINT,
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
    tableName: 'Provincias',
  },
);

module.exports = Provincia;
