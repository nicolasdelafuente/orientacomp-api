const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Usuario = sequelize.define(
  'Usuario',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    id_persona: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    password: {
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
    tableName: 'Usuarios',
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

module.exports = Usuario;
