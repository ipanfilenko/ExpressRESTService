import tasksRepo from './task.memory.repository';
import { Task } from './task.model';

const getAll = (boardId?: string): Promise<Task[]> => tasksRepo.getAll(boardId);

const create = (task: Task): Promise<Task> => tasksRepo.create(task);

const getById = (boardId: string, taskId: string): Promise<Task | undefined> => tasksRepo.getById(boardId, taskId);

const deleteTaskById = (boardId: string, taskId: string) => tasksRepo.deleteTaskById(boardId, taskId);

const updateTask = (task: Task) => tasksRepo.updateTask(task);

const deleteTasksForUser = (userId: string) => tasksRepo.deleteTasksForUser(userId);

const deleteTasksForBoard = (boardId: string) => tasksRepo.deleteTasksForBoard(boardId);

const taskService = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };

export default taskService;
