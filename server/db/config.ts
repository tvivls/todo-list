import dotenv from 'dotenv';
import {Sequelize} from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
  },
);
