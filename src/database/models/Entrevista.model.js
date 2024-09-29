const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const { commonModelOptions } = require('../config/modelOptions');

const Entrevista = sequelize.define(
  'Entrevista',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    id_seguimiento: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_orientador: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    observacion: {
      type: DataTypes.STRING,
    },
    accion: {
      type: DataTypes.DATE,
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
    tableName: 'Entrevistas',
  },
);

module.exports = Entrevista;