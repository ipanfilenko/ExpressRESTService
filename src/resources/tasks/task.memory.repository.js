/**
 *
 * @type {Array}
 */
let tasks = [];

/**
 *
 * @param boardId
 * @returns {Promise<*[]>}
 */
const getAll = async (boardId) => tasks.filter(task => task.boardId === boardId);

/**
 *
 * @param user
 * @returns {Promise<*>}
 */
const create = async (user) => {
  tasks.push(user);
  return user;
};

/**
 *
 * @param boardId
 * @param taskId
 * @returns {Promise<*>}
 */
const getById = async (boardId, taskId) => tasks.find(task => task.id === taskId && task.boardId === boardId);

/**
 *
 * @param boardId
 * @param taskId
 * @returns {Promise<void>}
 */
const deleteTaskById = async (boardId, taskId) => {
  tasks = tasks.filter(task => !(task.id === taskId && task.boardId === boardId));
};

/**
 *
 * @param task
 * @returns {Promise<void>}
 */
const updateTask = async (task) => {
  tasks = tasks.map(taskFromStore => taskFromStore.id === task.id ? task : taskFromStore);
};

/**
 *
 * @param userId
 * @returns {Promise<void>}
 */
const deleteTasksForUser = async (userId) => {
  tasks = tasks.map(task => (task.userId === userId ? { ...task, userId: null, } : task));
};

/**
 *
 * @param boardId
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
