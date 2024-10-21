const express = require('express');
const sequelize = require('./database/config/database.js');
const router = require('./routes');
const cors = require('cors');
const { exec } = require('child_process');

const BASEROUTE = process.env.BASE_ROUTE;
const ENV = process.env.ENV;
const VERSION = process.env.VERSION;
const FULLBASEROUTE = `/${BASEROUTE}/${ENV}/${VERSION}`;

async function connectDB() {
  try {
    await sequelize.authenticate();
    await sequelize.drop();
    sequelize.sync({ alter: true });

    await exec('npx sequelize-cli db:migrate', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing migrations: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Migration error: ${stderr}`);
        return;
      }
      console.log(`Migration output: ${stdout}`);
    });

    exec('npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing seeds: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Seed error: ${stderr}`);
        return;
      }
      console.log(`Seed output: ${stdout}`);
    });

    if (ENV === 'development' || ENV === 'testing') {
      await sequelize.sync({ alter: true });
      console.log(`Database synchronized with alter in ${ENV} environment`);
    } else if (ENV === 'production') {
      await sequelize.sync();
      console.log(`Database synchronization is not automatic in production`);
    }

    console.log(`Connected to the database: ${BASEROUTE}`);
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
}

connectDB();

const server = express();
server.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

server.use(express.json());
server.use(FULLBASEROUTE, router);
server.get(FULLBASEROUTE, (req, res) => {
  res.send({
    msg: 'Message from API',
    originalUrl: `${req.originalUrl}`,
  });
});

module.exports = server;
