'use strict';
const data = require('../data/instituto.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Institutos', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Institutos', null, {});
  }
};
