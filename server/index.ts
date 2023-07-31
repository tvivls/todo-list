import express from 'express';
import cors from 'cors';
import {sequelize} from './db/config';
import dotenv from 'dotenv';
import router from './routes';
import errorHandler from './middleware/errorHandlingMiddleware';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(errorHandler);

const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {});
  } catch (error) {
    console.error(error);
  }
};

start();
