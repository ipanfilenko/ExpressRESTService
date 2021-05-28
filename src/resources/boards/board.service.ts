import boardsRepo from './boards.memory.repository';
import { BoardModel } from './board.interface';

/**
 *  Object with property of board ({ id: string; title: string; columns: array of column})
 *
 * @typedef {object} Board
 * @property {string} id Key/Id for board
 * @property {string} title Title of board
 * @property {columns} columns Column(set of tasks)
 */

/**
 * Get all boards
 *
 * @returns {Promise<Board[]>} Return array of boards
 */
const getAll = (): Promise<BoardModel[]> => boardsRepo.getAll();

/**
 * Add/Create board in memoryDB
 *
 * @param {Board} board Trello board
 * @returns {Promise<Board>} Add/Create new Trello board
 */
const create = (board: BoardModel): Promise<BoardModel> => boardsRepo.create(board);

/**
 * Get Trello board by ID
 *
 * @param {string} boardId ID of board
 * @returns {Promise<Board>} Return Trello board
 */
const getById = (boardId?: string): Promise<BoardModel|undefined> => boardsRepo.getById(boardId);

/**
 * Delete Trello board from list of boards
 *
 * @param {string} boardId ID of board
 * @returns {Promise<void>}
 */
const deleteBoardById = (boardId?: string): Promise<void> => boardsRepo.deleteBoardById(boardId);

/**
 * Update Trello board with new values
 *
 * @param {Board} board Trello board
 * @returns {Promise<void>}
 */
const updateBoard = (board: BoardModel): Promise<void> => boardsRepo.updateBoard(board);

/**
 *
 * @type {{getAll: *, getById: *, deleteBoardById: *, create: *, updateBoard: *}}
 */

const boardService = { getAll, create, getById, deleteBoardById, updateBoard };

export default boardService;
