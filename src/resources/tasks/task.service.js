const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const create = (task) => tasksRepo.create(task);

const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

const deleteTaskById = (boardId, taskId) => tasksRepo.deleteTaskById(boardId, taskId);

const updateTask = (task) => tasksRepo.updateTask(task);

const deleteTasksForUser = (userId) => tasksRepo.deleteTasksForUser(userId);

const deleteTasksForBoard = (boardId) => tasksRepo.deleteTasksForBoard(boardId);

module.exports = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };
