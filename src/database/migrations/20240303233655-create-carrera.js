'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carreras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_instituto: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Institutos', // Nombre de la tabla a la que hace referencia
          key: 'id' // Nombre de la columna de la tabla referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Carreras');
  }
};