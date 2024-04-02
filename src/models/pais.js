'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pais.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iso: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pais',
    tableName: 'Paises',
  });
  return Pais;
};