import express from 'express';
import User from './user.model';
import UserService from './user.service';
import taskService from '../tasks/task.service';

const router = express.Router();

router.route('/').get(async (req, res) => {
  console.log(req);
  const users = await UserService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = new User({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });

  await UserService.create(user);

  res.status(201);
  res.json(User.toResponse(user));
});

router.route('/:userId').get(async (req, res) => {
  const user = await UserService.getById(req.params.userId);
  res.json(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  await UserService.deleteUserById(req.params.userId);
  await taskService.deleteTasksForUser(req.params.userId);
  res.status(204);
  res.json({});
});

router.route('/:userId').put(async (req, res) => {
  const user = new User({
    id: req.params.userId,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });

  await UserService.updateUser(user);

  res.json(User.toResponse(user));
});

export default router;
