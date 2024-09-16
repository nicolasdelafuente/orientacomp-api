const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Carrera = sequelize.define(
  'Carrera',
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
    id_instituto: {
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
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'Carreras',
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

module.exports = Carrera;
