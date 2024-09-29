const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const { commonModelOptions } = require('../config/modelOptions');

const Persona = sequelize.define(
  'Persona',
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
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_documento: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_genero: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_pais: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_provincia: {
      type: DataTypes.BIGINT,
    },
    id_localidad: {
      type: DataTypes.BIGINT,
    },
    id_carrera: {
      type: DataTypes.BIGINT,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deleted_by: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    ...commonModelOptions,
    tableName: 'Personas',
  },
);

module.exports = Persona;