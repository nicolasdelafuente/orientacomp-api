'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seguimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seguimiento.init({
    id_seguimiento_tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_orientado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_seguidor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seguimiento',
  });
  return Seguimiento;
};