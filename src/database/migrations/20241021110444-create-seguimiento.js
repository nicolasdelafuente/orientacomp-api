'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seguimientos', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      id_tipo_de_seguimiento: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      id_categoria: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      id_estado: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      id_orientado: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      id_orientador: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      motivo: {
        type: Sequelize.STRING(2048),
        allowNull: false,
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
    await queryInterface.dropTable('Seguimientos');
  },
};
