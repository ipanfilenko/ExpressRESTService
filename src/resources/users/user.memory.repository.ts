import { getRepository } from "typeorm";
import bcryptjs from 'bcryptjs';
import { User } from './user.model';

const getAll = async (): Promise<User[]> => getRepository(User).find();

const create = async (user: User): Promise<User> => getRepository(User).save({
    ...user,
    password: bcryptjs.hashSync(user.password, 10)
});

const getById = async (userId?: string): Promise<User | undefined>  => getRepository(User).findOne(userId);

const deleteUserById = async (userId: string) => getRepository(User).delete(userId);

const updateUser = async (user: User) => getRepository(User).update(user.id, user);

const loginUser = async (login: string): Promise<boolean> => !!await getRepository(User).findOne({login});

const usersRepo = { getAll, create, getById, deleteUserById, updateUser, loginUser };

export default usersRepo;
