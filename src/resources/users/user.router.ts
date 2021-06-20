import express, { Request, Response } from 'express';
import { User } from './user.model';
import UserService from './user.service';
import taskService from '../tasks/task.service';
import { handleErrorAsync } from '../../utils/handleErrorAsync ';

const router = express.Router();

router.route('/').get(handleErrorAsync(async (_req: Request, res: Response) => {
  const users = await UserService.getAll();
  res.json(users.map(User.toResponse));
}));

router.route('/').post(handleErrorAsync(async (req: Request, res: Response) => {
  const user = new User({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });

  await UserService.create(user);

  res.status(201);
  res.json(User.toResponse(user));
}));

router.route('/:userId').get(handleErrorAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await UserService.getById(userId);
  res.json(User.toResponse(user as User));
}));

router.route('/:userId').delete(handleErrorAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (userId) {
    await UserService.deleteUserById(userId);
    await taskService.deleteTasksForUser(userId);
    res.status(204);
    res.json({});
  } else {
    res.status(404);
    res.json({});
  }
}));

router.route('/:userId').put(handleErrorAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = new User({
    id: userId,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });

  await UserService.updateUser(user);

  res.json(User.toResponse(user));
}));

export default router;
