'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seguimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_seguimiento_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SeguimientoTipos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categorias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Estados',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_orientado: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_seguidor: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      motivo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seguimientos');
  }
};