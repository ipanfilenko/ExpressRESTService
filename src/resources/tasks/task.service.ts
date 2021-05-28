import tasksRepo from './task.memory.repository';
import { TaskModel } from './task.interface';

/**
 *  Object with property of task
 *
 * @typedef {object} Task
 * @property {string} id Key/Id for task
 * @property {string} title Title of task
 * @property {number} order Order of task
 * @property {string} description Description for task
 * @property {string} userId Owner for task
 */

/**
 * Get all tasks for selected board
 *
 * @param {string} boardId ID of selected board
 * @returns {Promise<Task[]>} Return array of tasks
 */
const getAll = (boardId?: string): Promise<TaskModel[]> => tasksRepo.getAll(boardId);

/**
 * Add/create new task
 *
 * @param {Task} task New task
 * @returns {Task} Return task that was created
 */
const create = (task: TaskModel): Promise<TaskModel> => tasksRepo.create(task);

/**
 * Get task by ID
 *
 * @param {string} boardId ID for selected board
 * @param {string} taskId ID for selected task
 * @returns {Promise<Task>} Selected task
 */
const getById = (boardId?: string, taskId?: string): Promise<TaskModel | undefined> => tasksRepo.getById(boardId, taskId);

/**
 * Delete task by ID
 *
 * @param {string} boardId ID for selected board
 * @param {string} taskId ID for selected task
 * @returns {Promise<void>}
 */
const deleteTaskById = (boardId?: string, taskId?: string): Promise<void> => tasksRepo.deleteTaskById(boardId, taskId);

/**
 * Update task with new values
 *
 * @param {Task} task Object with new values for task
 * @returns {Promise<void>}
 */
const updateTask = (task: TaskModel): Promise<void> => tasksRepo.updateTask(task);

/**
 * Delete task for selected user
 *
 * @param {string } userId ID for selected user
 * @returns {Promise<void>}
 */
const deleteTasksForUser = (userId?: string): Promise<void> => tasksRepo.deleteTasksForUser(userId);

/**
 * Delete tasks for selected board
 *
 * @param {string} boardId ID for selected board
 * @returns {Promise<void>}
 */
const deleteTasksForBoard = (boardId?: string): Promise<void> => tasksRepo.deleteTasksForBoard(boardId);

/**
 *
 * @type {{updateTask: *, getAll: *, getById: *, deleteTaskById: *, create: *, deleteTasksForUser: *, deleteTasksForBoard: *}}
 */

const taskService = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };

export default taskService;
