require('dotenv').config();

module.exports = {
	config: {
		username: process.env.DB_USERNAME || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'orientacomp',
		host: process.env.DB_HOSTNAME || 'localhost',
		dialect: process.env.DB_DIALECT || 'mysql',
	},
};