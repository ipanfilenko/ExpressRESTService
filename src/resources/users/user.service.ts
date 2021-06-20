import usersRepo from './user.memory.repository';
import { User } from './user.model';

const getAll = (): Promise<User[]> => usersRepo.getAll();

const create = (user: User): Promise<User> => usersRepo.create(user);

const getById = (userId?: string): Promise<User | undefined> => usersRepo.getById(userId);

const deleteUserById = (userId: string) => usersRepo.deleteUserById(userId);

const updateUser = (user: User) => usersRepo.updateUser(user);

const UserService = { getAll, create, getById, deleteUserById, updateUser };

export default UserService;
