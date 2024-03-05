'use strict';
const data = require('../data/seguimientoTipo.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SeguimientoTipos', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SeguimientoTipos', null, {});
  }
};
