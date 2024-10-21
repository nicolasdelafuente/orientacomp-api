'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Entrevistas', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      id_seguimiento: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      id_orientador: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      observacion: {
        type: Sequelize.STRING,
      },
      accion: {
        type: Sequelize.DATE,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('Entrevistas');
  },
};
