const {
  tableExists,
  deleteTableData,
  resetAutoIncrement,
  insertData,
} = require('../../utils/migration.util.js');
const path = require('path');
const dataPath = path.resolve(__dirname, '../data/documento.js');
const tableName = 'TiposDeDocumentos';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    try {
      if (!(await tableExists(queryInterface, tableName))) {
        console.log(
          `Table ${tableName} does not exist. Skipping data operations.`,
        );
        return;
      }

      await deleteTableData(queryInterface, tableName);
      await resetAutoIncrement(queryInterface, tableName);
      await insertData(queryInterface, tableName, dataPath);
    } catch (error) {
      console.error('Error processing data for table', tableName, ':', error);
      throw error;
    }
  },

  async down(queryInterface) {
    try {
      if (!(await tableExists(queryInterface, tableName))) {
        console.log(
          `Table ${tableName} does not exist. Skipping data operations.`,
        );
        return;
      }

      await deleteTableData(queryInterface, tableName);
      await resetAutoIncrement(queryInterface, tableName);
    } catch (error) {
      console.error('Error deleting data from table', tableName, ':', error);
      throw error;
    }
  },
};