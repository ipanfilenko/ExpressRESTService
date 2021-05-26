const usersRepo = require('./user.memory.repository');

/**
 *
 * @returns {*}
 */
const getAll = () => usersRepo.getAll();

/**
 *
 * @param user
 * @returns {user}
 */
const create = (user) => usersRepo.create(user);

/**
 *
 * @param userId
 * @returns {*}
 */
const getById = (userId) => usersRepo.getById(userId);

/**
 *
 * @param userId
 * @returns {*}
 */
const deleteUserById = (userId) => usersRepo.deleteUserById(userId);

/**
 *
 * @param user
 * @returns {*}
 */
const updateUser = (user) => usersRepo.updateUser(user);

/**
 *
 * @type {{getAll: *, getById: *, create: *, updateUser: *, deleteUserById: *}}
 */
module.exports = { getAll, create, getById, deleteUserById, updateUser };
