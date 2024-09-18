const tableExists = async (queryInterface, tableName) => {
    const [tables] = await queryInterface.sequelize.query(
        SHOW TABLES LIKE '${tableName}';
    );
    return tables.length > 0;
    };

const deleteTableData = async (queryInterface, tableName) => {
    await queryInterface.bulkDelete(tableName, null, {});
    };

const resetAutoIncrement = async (queryInterface, tableName) => {
    await queryInterface.sequelize.query(
        ALTER TABLE ${tableName} AUTO_INCREMENT = 1;
    );
    };

const insertData = async (queryInterface, tableName, dataPath) => {
    const data = require(dataPath);
    await queryInterface.bulkInsert(tableName, data, {});
    };

    module.exports = {
        tableExists,
        deleteTableData,
        resetAutoIncrement,
        insertData,
    };