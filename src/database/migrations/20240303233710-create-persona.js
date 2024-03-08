'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
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
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_documento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'DocumentoTipos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      documento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Generos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_pais: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Paises',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_provincia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Provincias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_localidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Localidades',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_carrera: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Carreras',
          key: 'id'
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
    await queryInterface.dropTable('Personas');
  }
};