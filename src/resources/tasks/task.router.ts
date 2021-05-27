// @ts-nocheck
import express from 'express';
import Task from './task.model';
import tasksService from './task.service';

const router = express.Router({ mergeParams: true });
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const task = new Task({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId,
  });

  await tasksService.create(task);

  res.status(201);
  res.json(task);
});

router.route('/:taskId').get(async (req, res) => {
  const task = await tasksService.getById(req.params.boardId, req.params.taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404);
    res.json({});
  }
});

router.route('/:taskId').delete(async (req, res) => {
  await tasksService.deleteTaskById(req.params.boardId, req.params.taskId);
  res.status(204);
  res.json({});
});

router.route('/:taskId').put(async (req, res) => {
  const task = new Task({
    id: req.params.taskId,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId,
  });

  await tasksService.updateTask(task);

  res.json(task);
});

export default router;
