import express, { Request, Response } from 'express';
import { Board } from './board.model';
import boardService from './board.service';
import taskService from '../tasks/task.service';
import { handleErrorAsync } from '../../utils/handleErrorAsync ';

const router = express.Router();

router.route('/').get(handleErrorAsync(async (_req: Request, res: Response) => {
  const boards = await boardService.getAll();

  if (boards) {
    res.json(boards);
  }
}));

router.route('/').post(handleErrorAsync(async (req: Request, res: Response) => {
  const board = new Board({
    title: req.body.title,
    columns: req.body.columns,
  });

  await boardService.create(board);

  res.status(201);
  res.json(board);
}));

router.route('/:boardId').get(handleErrorAsync(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const board = await boardService.getById(boardId);

  if (board) {
    res.json(board);
  } else {
    res.status(404);
    res.json({});
  }
}));

router.route('/:boardId').delete(handleErrorAsync(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  await boardService.deleteBoardById(boardId);
  await taskService.deleteTasksForBoard(boardId);
  res.status(204);
  res.json({});
}));

router.route('/:boardId').put(handleErrorAsync(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const board = new Board({
    id: boardId,
    title: req.body.title,
    columns: req.body.columns,
  });


  await boardService.updateBoard(board);

  res.json(board);
}));

export default router;
