const tasksRepo = require('./task.memory.repository');

/**
 *
 * @param boardId
 * @returns {*}
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 *
 * @param task
 * @returns {task}
 */
const create = (task) => tasksRepo.create(task);

/**
 *
 * @param boardId
 * @param taskId
 * @returns {*}
 */
const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

/**
 *
 * @param boardId
 * @param taskId
 * @returns {*}
 */
const deleteTaskById = (boardId, taskId) => tasksRepo.deleteTaskById(boardId, taskId);

/**
 *
 * @param task
 * @returns {*}
 */
const updateTask = (task) => tasksRepo.updateTask(task);

/**
 *
 * @param userId
 * @returns {*}
 */
const deleteTasksForUser = (userId) => tasksRepo.deleteTasksForUser(userId);

/**
 *
 * @param boardId
 * @returns {*}
 */
const deleteTasksForBoard = (boardId) => tasksRepo.deleteTasksForBoard(boardId);

/**
 *
 * @type {{updateTask: *, getAll: *, getById: *, deleteTaskById: *, create: *, deleteTasksForUser: *, deleteTasksForBoard: *}}
 */
module.exports = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };
