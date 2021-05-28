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
 *
 * @type {User[]}
 */
let users = [] as UserModel[];

/**
 * Get all users
 *
 * @returns {User[]} Array with users
 */
const getAll = async (): Promise<UserModel[]> => users;

/**
 * Add/create new user
 *
 * @param {User} user Object with user's values
 * @returns {User} User that was created
 */
const create = async (user: UserModel): Promise<UserModel> => {
  users.push(user);
  return user;
};

/**
 * Get User by ID
 *
 * @param {string} userId ID for user
 * @returns {Promise<User>} Selected user
 */
const getById = async (userId?: string): Promise<UserModel | undefined>  => users.find(user => user.id === userId);

/**
 * Delete User by ID
 *
 * @param {string} userId ID for user
 * @returns {Promise<void>}
 */
const deleteUserById = async (userId?: string): Promise<void> => {
  users = users.filter(user => user.id !== userId);
};

/**
 *
 * @param {User} user Object with new values for User
 * @returns {Promise<void>}
 */
const updateUser = async (user: UserModel): Promise<void> => {
  users = users.map(userFromStore => userFromStore.id === user.id ? user : userFromStore);
};

/**
 *
 * @type {{getAll: *, getById: *, create: *, updateUser: *, deleteUserById: *}}
 */

const usersRepo = { getAll, create, getById, deleteUserById, updateUser };

export default usersRepo;
