const boardsRepo = require('./boards.memory.repository');

/**
 *
 * @returns {Promise<*>}
 */
const getAll = () => boardsRepo.getAll();

/**
 *
 * @param board
 * @returns {Promise<*>}
 */
const create = (board) => boardsRepo.create(board);

/**
 *
 * @param board
 * @returns {Promise<*>}
 */
const getById = (boardId) => boardsRepo.getById(boardId);

/**
 *
 * @param board
 * @returns {Promise<*>}
 */
const deleteBoardById = (boardId) => boardsRepo.deleteBoardById(boardId);

/**
 *
 * @param board
 * @returns {Promise<*>}
 */
const updateBoard = (board) => boardsRepo.updateBoard(board);

/**
 *
 * @type {{getAll: *, getById: *, deleteBoardById: *, create: *, updateBoard: *}}
 */

module.exports = { getAll, create, getById, deleteBoardById, updateBoard };
