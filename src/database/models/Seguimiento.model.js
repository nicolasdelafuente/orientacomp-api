const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const { commonModelOptions } = require('../config/modelOptions');

const Seguimiento = sequelize.define(
  'Seguimiento',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    id_tipo_de_seguimiento: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_categoria: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_estado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_orientado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_orientador: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING(2048),
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
    tableName: 'Seguimientos',
  },
);

module.exports = Seguimiento;