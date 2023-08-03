import { Model, DataTypes } from 'sequelize';
import { sequelize } from './config';

export interface TodoAttributes {
  id?: number;
  title: string;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

class Todo extends Model<TodoAttributes> {
  id!: number;
  title!: string;
  status!: boolean;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
  readonly deletedAt!: Date;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: 'Todo',
    tableName: 'Todos',
  },
);

export { Todo };
