const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');
const taskService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = new Board({
    title: req.body.title,
    columns: req.body.columns,
  });

  await boardService.create(board);

  res.status(201);
  res.json(board);
});


router.route('/:boardId').get(async (req, res) => {
  const board = await boardService.getById(req.params.boardId);
  res.json(board);
});

router.route('/:boardId').delete(async (req, res) => {
  await boardService.deleteBoardById(req.params.boardId);
  await taskService.deleteTasksForBoard(req.params.boardId);
  res.status(204);
  res.json({});
});

router.route('/:boardId').put(async (req, res) => {
  const board = new Board({
    id: req.params.boardId,
    title: req.body.title,
    columns: req.body.columns,
  });


  await boardService.updateBoard(board);

  res.json(board);
});

module.exports = router;
