import {NextFunction, Request, Response} from 'express';
import {Todo} from '../db/models';
import ApiError from '../error/apiError';

class TodoController {
  async getAll(req: Request, res: Response) {
    const todos = await Todo.findAll();
    return res.json(todos);
  };

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;
      const todo = await Todo.create({ title, status: false });
      return res.json(todo);
    } catch (e) {
      e instanceof Error && next(ApiError.badRequest(e.message));
    }
  };

  async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { title, status } = req.body;
    const [updatedTodoCount, [updatedTodo]] = await Todo.update(
      { title, status },
      { where: {id}, returning: true },
    );
    if (updatedTodoCount > 0)
      return res.status(200).json(updatedTodo);
    else
      next(ApiError.badRequest('Todo id not found'));
  };

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deletedTodo = await Todo.destroy(
      { where: {id} });
    return res.json(deletedTodo > 0);
  };
};

export default new TodoController();
