import express, { Request, Response } from 'express';
import { Task } from './task.model';
import tasksService from './task.service';

const router = express.Router({ mergeParams: true });
router.route('/').get(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId);
  res.json(tasks);
});

router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const task = new Task({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId,
    columnId: req.body.columnId,
  });

  await tasksService.create(task);

  res.status(201);
  res.json(task);
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  const { boardId, taskId } = req.params;
  const task = await tasksService.getById(boardId, taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404);
    res.json({});
  }
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  const { boardId, taskId } = req.params;
  await tasksService.deleteTaskById(boardId, taskId);
  res.status(204);
  res.json({});
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  const { boardId, taskId } = req.params;
  const task = new Task({
    id: taskId,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId,
    columnId: req.body.columnId,
  });

  await tasksService.updateTask(task);

  res.json(task);
});

export default router;
