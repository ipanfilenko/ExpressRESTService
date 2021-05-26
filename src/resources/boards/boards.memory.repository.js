/**
 *  Object with property of board ({ id: string; title: string; columns: array of column})
 *
 * @typedef {object} Board
 * @property {string} id Key/Id for board
 * @property {string} title Title of board
 * @property {columns} columns Column(set of tasks)
 */

/**
 *
 * @type {Board[]}
 */
let boards = [];

/**
 * Return all boards
 *
 * @returns {Promise<Board[]>} Return list of board
 */
const getAll = async () => boards;

/**
 * Creat new board
 *
 * @param {Board} board Trello board
 * @returns {Promise<Board>} Add/create new board
 */
const create = async (board) => {
  boards.push(board);
  return board;
};

/**
 * Get board by ID
 *
 * @param {string} boardId ID for Trello board
 * @returns {Promise<Promise<Board>|undefined>} Retrun board based on ID or undefined if board is not exist
 */
const getById = async (boardId) => boards.find(board => board.id === boardId);

/**
 * Delete board based on ID
 *
 * @param {string} boardId ID for Trello board
 * @returns {Promise<void>}
 */
const deleteBoardById = async (boardId) => {
  boards = boards.filter(board => board.id !== boardId);
};

/**
 * Update board with new values
 *
 * @param {Board} board Trello board
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
