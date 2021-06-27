import { getRepository } from "typeorm";
import { User } from './user.model';

const getAll = async (): Promise<User[]> => getRepository(User).find();

const create = async (user: User): Promise<User> => getRepository(User).save(user);

const getById = async (userId?: string): Promise<User | undefined>  => getRepository(User).findOne(userId);

const deleteUserById = async (userId: string) => getRepository(User).delete(userId);

const updateUser = async (user: User) => getRepository(User).update(user.id, user);

const usersRepo = { getAll, create, getById, deleteUserById, updateUser };

export default usersRepo;
