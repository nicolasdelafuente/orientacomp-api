'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entrevistas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_seguimiento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Seguimientos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_entrevistador: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      observacion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      accion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_almacenamiento: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Entrevistas');
  }
};