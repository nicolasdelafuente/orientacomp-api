const express = require('express');
const sequelize = require('./config/database.js');
//Habilitar require const router = require('./routes/index.js');

const BASEROUTE = process.env.BASE_ROUTE;
const ENV = process.env.ENV;
const VERSION = process.env.VERSION;
const FULLBASEROUTE = `/${BASEROUTE}/${ENV}/${VERSION}`;

async function connectDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

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

server.use(express.json());
//APUNtar a router server.use(FULLBASEROUTE, router);
server.get(FULLBASEROUTE, (req, res) => {
  res.send({
    msg: 'Message from API',
    originalUrl: `${req.originalUrl}`,
  });
});

module.exports = server;
