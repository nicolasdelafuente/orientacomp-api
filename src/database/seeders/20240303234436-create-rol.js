'use strict';
const data = require('../data/rol.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', null, {});
  }
};
