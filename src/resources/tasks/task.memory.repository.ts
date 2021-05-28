import { TaskModel } from './task.interface';

/**
 *  Object with property of task
 *
 * @typedef {object} Task
 * @property {string} id Key/Id for task
 * @property {string} title Title of task
 * @property {order} order Order of task
 * @property {string} description Description for task
 * @property {string} userId Owner for task
 */

/**
 *
 * @type {Task[]}
 */
let tasks = [] as TaskModel[];

/**
 * Get all tasks for selected board
 *
 * @param {string} boardId ID of selected board
 * @returns {Promise<Task[]>} Return array of tasks
 */
const getAll = async (boardId?: string): Promise<TaskModel[]> => tasks.filter(task => task.boardId === boardId);

/**
 * Add/create new task
 *
 * @param {Task} task New task
 * @returns {Task} Return task that was created
 */
const create = async (task: TaskModel): Promise<TaskModel> => {
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
const getById = async (boardId?: string, taskId?: string): Promise<TaskModel|undefined> => tasks
    .find(task => task.id === taskId && task.boardId === boardId);

/**
 * Delete task by ID
 *
 * @param {string} boardId ID for selected board
 * @param {string} taskId ID for selected task
 * @returns {Promise<void>}
 */
const deleteTaskById = async (boardId?: string, taskId?: string): Promise<void> => {
  tasks = tasks.filter(task => !(task.id === taskId && task.boardId === boardId));
};

/**
 * Update task with new values
 *
 * @param {Task} task Object with new values for task
 * @returns {Promise<void>}
 */
const updateTask = async (task: TaskModel): Promise<void> => {
  tasks = tasks.map(taskFromStore => taskFromStore.id === task.id ? task : taskFromStore);
};

/**
 * Delete task for selected user
 *
 * @param {string } userId ID for selected user
 * @returns {Promise<void>}
 */
const deleteTasksForUser = async (userId?: string): Promise<void> => {
  tasks = tasks.map(task => (task.userId === userId ? { ...task, userId: null, } : task));
};

/**
 * Delete tasks for selected board
 *
 * @param {string} boardId ID for selected board
 * @returns {Promise<void>}
 */
const deleteTasksForBoard = async (boardId?: string): Promise<void> => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

/**
 *
 * @type {{updateTask: *, getAll: *, getById: *, deleteTaskById: *, create: *, deleteTasksForUser: *, deleteTasksForBoard: *}}
 */
const tasksRepo = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };

export default tasksRepo;
