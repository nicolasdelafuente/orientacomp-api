'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Persona.init({
    nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_documento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    documento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_genero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_provincia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_localidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_carrera: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};