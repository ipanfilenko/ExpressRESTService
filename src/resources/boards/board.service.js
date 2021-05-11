const boardsRepo = require('./boards.memory.repository');

const getAll = () => boardsRepo.getAll();

const create = (board) => boardsRepo.create(board);

const getById = (boardId) => boardsRepo.getById(boardId);

const deleteBoardById = (boardId) => boardsRepo.deleteBoardById(boardId);

const updateBoard = (board) => boardsRepo.updateBoard(board);

module.exports = { getAll, create, getById, deleteBoardById, updateBoard };
