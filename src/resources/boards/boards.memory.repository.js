let boards = [];

const getAll = async () => boards;

const create = async (board) => {
  boards.push(board);
  return board;
};

const getById = async (boardId) => boards.find(board => board.id === boardId);

const deleteBoardById = async (boardId) => {
  boards = boards.filter(board => board.id !== boardId);
};

const updateBoard = async (board) => {
  boards = boards.map(boardFromStore => boardFromStore.id === board.id ? board : boardFromStore);
};

module.exports = { getAll, create, getById, deleteBoardById, updateBoard };
