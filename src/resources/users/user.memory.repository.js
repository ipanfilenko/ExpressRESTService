/**
 *
 * @type {Array}
 */
let users = [];

/**
 *
 * @returns {Promise<Array>}
 */
const getAll = async () => users;

/**
 *
 * @param user
 * @returns {Promise<*>}
 */
const create = async (user) => {
  users.push(user);
  return user;
};

/**
 *
 * @param userId
 * @returns {Promise<*>}
 */
const getById = async (userId) => users.find(user => user.id === userId);

/**
 *
 * @param userId
 * @returns {Promise<void>}
 */
const deleteUserById = async (userId) => {
  users = users.filter(user => user.id !== userId);
};

/**
 *
 * @param user
 * @returns {Promise<void>}
 */
const updateUser = async (user) => {
  users = users.map(userFromStore => userFromStore.id === user.id ? user : userFromStore);
};

/**
 *
 * @type {{getAll: *, getById: *, create: *, updateUser: *, deleteUserById: *}}
 */
module.exports = { getAll, create, getById, deleteUserById, updateUser };
