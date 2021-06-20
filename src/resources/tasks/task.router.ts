import express, { Request, Response } from 'express';
import { Task } from './task.model';
import tasksService from './task.service';
import { handleErrorAsync } from '../../utils/handleErrorAsync ';

const router = express.Router({ mergeParams: true });

router.route('/').get(handleErrorAsync(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId);
  res.json(tasks);
}));

router.route('/').post(handleErrorAsync(async (req: Request, res: Response) => {
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
}));

router.route('/:taskId').get(handleErrorAsync(async (req: Request, res: Response) => {
  const { boardId, taskId } = req.params;

  if (boardId && taskId) {
    const task = await tasksService.getById(boardId, taskId);

    if (task) {
      res.json(task);
    } else {
      res.status(404);
      res.json({});
    }
  } else {
    res.status(404);
    res.json({});
  }
}));

router.route('/:taskId').delete(handleErrorAsync(async (req: Request, res: Response) => {
  const { boardId, taskId } = req.params;

  if (boardId && taskId) {
    await tasksService.deleteTaskById(boardId, taskId);
    res.status(204);
    res.json({});
  } else {
    res.status(404);
    res.json({});
  }
}));

router.route('/:taskId').put(handleErrorAsync(async (req: Request, res: Response) => {
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
}));

export default router;
