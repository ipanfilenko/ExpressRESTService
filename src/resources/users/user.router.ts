import express, { Request, Response } from 'express';
import User from './user.model';
import UserService from './user.service';
import taskService from '../tasks/task.service';
import { UserModel } from './user.interface';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await UserService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = new User({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });

  await UserService.create(user);

  res.status(201);
  res.json(User.toResponse(user));
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await UserService.getById(userId);
  res.json(User.toResponse(user as UserModel));
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  const { userId } = req.params;
  await UserService.deleteUserById(userId);
  await taskService.deleteTasksForUser(userId);
  res.status(204);
  res.json({});
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = new User({
    id: userId,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });

  await UserService.updateUser(user);

  res.json(User.toResponse(user));
});

export default router;
