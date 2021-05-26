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
 *
 * @type {Task[]}
 */
let tasks = [];

/**
 * Get all tasks for selected board
 *
 * @param {string} boardId ID of selected board
 * @returns {Promise<Task[]>} Return array of tasks
 */
const getAll = async (boardId) => tasks.filter(task => task.boardId === boardId);

/**
 * Add/create new task
 *
 * @param {Task} task New task
 * @returns {Task} Return task that was created
 */
const create = async (task) => {
  tasks.push(task);
  return task;
};

/**
 * Get task by ID
 *
 * @param {string} boardId ID for selected board
 * @param {string} taskId ID for selected task
 * @returns {Promise<Task>} Selected task
 */
const getById = async (boardId, taskId) => tasks.find(task => task.id === taskId && task.boardId === boardId);

/**
 * Delete task by ID
 *
 * @param {string} boardId ID for selected board
 * @param {string} taskId ID for selected task
 * @returns {Promise<void>}
 */
const deleteTaskById = async (boardId, taskId) => {
  tasks = tasks.filter(task => !(task.id === taskId && task.boardId === boardId));
};

/**
 * Update task with new values
 *
 * @param {Task} task Object with new values for task
 * @returns {Promise<void>}
 */
const updateTask = async (task) => {
  tasks = tasks.map(taskFromStore => taskFromStore.id === task.id ? task : taskFromStore);
};

/**
 * Delete task for selected user
 *
 * @param {string } userId ID for selected user
 * @returns {Promise<void>}
 */
const deleteTasksForUser = async (userId) => {
  tasks = tasks.map(task => (task.userId === userId ? { ...task, userId: null, } : task));
};

/**
 * Delete tasks for selected board
 *
 * @param {string} boardId ID for selected board
 * @returns {Promise<void>}
 */
const deleteTasksForBoard = async (boardId) => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

/**
 *
 * @type {{updateTask: *, getAll: *, getById: *, deleteTaskById: *, create: *, deleteTasksForUser: *, deleteTasksForBoard: *}}
 */
module.exports = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };
