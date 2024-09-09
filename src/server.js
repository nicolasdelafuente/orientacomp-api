import express from 'express';
import sequelize from './config/sequelize.js';

const BASEROUTE = process.env.BASE_ROUTE;
const ENV = process.env.ENV;
const VERSION = process.env.VERSION;
const FULLBASEROUTE = `/${BASEROUTE}/${ENV}/${VERSION}`;

export async function connectDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Connected to the database: ${BASEROUTE}`);
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
}

connectDB();

const server = express();

server.get(FULLBASEROUTE, (req, res) => {
  res.send({
    msg: 'Message from API',
    originalUrl: `${req.originalUrl}`,
  });
});

export default server;
