import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {sequelize} from './db/config';
import router from './routes';
import errorHandler from './middleware/errorHandlingMiddleware';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

(async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.info(`Server started on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
