'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrevista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entrevista.init({
    id_seguimiento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_entrevistador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accion: {
  type: DataTypes.STRINGS,
      allowNull: true
    },
    id_almacenamiento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Entrevista',
  });
  return Entrevista;
};