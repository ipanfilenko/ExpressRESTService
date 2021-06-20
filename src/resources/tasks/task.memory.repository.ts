import { getRepository } from "typeorm";
import { Task } from './task.model';

const getAll = async (boardId?: string): Promise<Task[]> => getRepository(Task).find({ boardId });

const create = async (task: Task): Promise<Task> => getRepository(Task).save(task);

const getById = async (boardId: string, taskId: string): Promise<Task|undefined> => getRepository(Task).findOne({boardId, id: taskId});

const deleteTaskById = async (boardId: string, taskId: string) => getRepository(Task).delete({ boardId, id: taskId });

const updateTask = async (task: Task) => getRepository(Task).update(task.id, task);

const deleteTasksForUser = async (userId: string) => {
    const tasksForUser = await getRepository(Task).find({ userId });
    await Promise.all(tasksForUser.map(async (task: Task) => {
        await getRepository(Task).update(task.id, {...task, userId: null});
    }));
};

const deleteTasksForBoard = async (boardId?: string) =>  getRepository(Task).delete({ boardId });

const tasksRepo = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };

export default tasksRepo;
