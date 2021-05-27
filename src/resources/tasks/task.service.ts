import tasksRepo from './task.memory.repository';

/**
 *  Object with property of task
 *
 * @typedef {object} Task
 * @property {string} id Key/Id for task
 * @property {string} title Title of task
 * @property {string} order Order of task
 * @property {string} description Description for task
 * @property {string} userId Owner for task
 */

/**
 * Get all tasks for selected board
 *
 * @param {string} boardId ID of selected board
 * @returns {Promise<Task[]>} Return array of tasks
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * Add/create new task
 *
 * @param {Task} task New task
 * @returns {Task} Return task that was created
 */
const create = (task) => tasksRepo.create(task);

/**
 * Get task by ID
 *
 * @param {string} boardId ID for selected board
 * @param {string} taskId ID for selected task
 * @returns {Promise<Task>} Selected task
 */
const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

/**
 * Delete task by ID
 *
 * @param {string} boardId ID for selected board
 * @param {string} taskId ID for selected task
 * @returns {Promise<void>}
 */
const deleteTaskById = (boardId, taskId) => tasksRepo.deleteTaskById(boardId, taskId);

/**
 * Update task with new values
 *
 * @param {Task} task Object with new values for task
 * @returns {Promise<void>}
 */
const updateTask = (task) => tasksRepo.updateTask(task);

/**
 * Delete task for selected user
 *
 * @param {string } userId ID for selected user
 * @returns {Promise<void>}
 */
const deleteTasksForUser = (userId) => tasksRepo.deleteTasksForUser(userId);

/**
 * Delete tasks for selected board
 *
 * @param {string} boardId ID for selected board
 * @returns {Promise<void>}
 */
const deleteTasksForBoard = (boardId) => tasksRepo.deleteTasksForBoard(boardId);

/**
 *
 * @type {{updateTask: *, getAll: *, getById: *, deleteTaskById: *, create: *, deleteTasksForUser: *, deleteTasksForBoard: *}}
 */

const taskService = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };

export default taskService;
