/**
 *
 * @type {Array}
 */
let boards = [];

/**
 *
 * @returns {Promise<Array>}
 */
const getAll = async () => boards;

/**
 *
 * @param board
 * @returns {Promise<*>}
 */
const create = async (board) => {
  boards.push(board);
  return board;
};

/**
 *
 * @param boardId
 * @returns {Promise<Promise<*>|*>}
 */
const getById = async (boardId) => boards.find(board => board.id === boardId);

/**
 *
 * @param boardId
 * @returns {Promise<void>}
 */
const deleteBoardById = async (boardId) => {
  boards = boards.filter(board => board.id !== boardId);
};

/**
 *
 * @param board
 * @returns {Promise<void>}
 */
const updateBoard = async (board) => {
  boards = boards.map(boardFromStore => boardFromStore.id === board.id ? board : boardFromStore);
};

/**
 *
 * @type {{getAll: *, getById: *, deleteBoardById: *, create: *, updateBoard: *}}
 */
module.exports = { getAll, create, getById, deleteBoardById, updateBoard };
