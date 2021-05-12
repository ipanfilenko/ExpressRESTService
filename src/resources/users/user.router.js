const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const taskService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = new User({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });

  await usersService.create(user);

  res.status(201);
  res.json(User.toResponse(user));
});

router.route('/:userId').get(async (req, res) => {
  const user = await usersService.getById(req.params.userId);
  res.json(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  await usersService.deleteUserById(req.params.userId);
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

  await usersService.updateUser(user);

  res.json(User.toResponse(user));
});

module.exports = router;
