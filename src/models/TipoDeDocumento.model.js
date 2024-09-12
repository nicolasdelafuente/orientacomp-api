const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const TipoDeDocumento = sequelize.define(
  'TipoDeDocumento',
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
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'TiposDeDocumentos',
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

module.exports = TipoDeDocumento;
