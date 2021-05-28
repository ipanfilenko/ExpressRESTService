import usersRepo from './user.memory.repository';
import { UserModel } from './user.interface';

/**
 *  Object with property of user
 *
 * @typedef {object} User
 * @property {string} id Key/Id for User
 * @property {string} name Name of User
 * @property {string} login Login of User
 * @property {string} password Password for User
 */

/**
 * Get all users
 *
 * @returns {User[]} Array with users
 */
const getAll = (): Promise<UserModel[]> => usersRepo.getAll();

/**
 * Add/create new user
 *
 * @param {User} user Object with user's values
 * @returns {User} User that was created
 */
const create = (user: UserModel): Promise<UserModel> => usersRepo.create(user);

/**
 * Get User by ID
 *
 * @param {string} userId ID for user
 * @returns {Promise<User>} Selected user
 */
const getById = (userId?: string): Promise<UserModel | undefined> => usersRepo.getById(userId);

/**
 * Delete User by ID
 *
 * @param {string} userId ID for user
 * @returns {Promise<void>}
 */
const deleteUserById = (userId?: string): Promise<void> => usersRepo.deleteUserById(userId);

/**
 * Update User with new values
 *
 * @param {User} user Object with new values for User
 * @returns {Promise<void>}
 */
const updateUser = (user: UserModel): Promise<void> => usersRepo.updateUser(user);

/**
 *
 * @type {{getAll: *, getById: *, create: *, updateUser: *, deleteUserById: *}}
 */
const UserService = { getAll, create, getById, deleteUserById, updateUser };

export default UserService;
