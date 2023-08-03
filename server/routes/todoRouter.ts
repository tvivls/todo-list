import {Router} from 'express';
import todoController from '../controllers/todoController';

const todoRouter = Router();

todoRouter.get('/', todoController.getAll);
todoRouter.post('/', todoController.create);
todoRouter.delete('/:id', todoController.delete);
todoRouter.patch('/:id', todoController.update);

export default todoRouter;
