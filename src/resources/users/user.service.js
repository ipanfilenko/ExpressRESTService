const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const create = (user) => usersRepo.create(user);

const getById = (userId) => usersRepo.getById(userId);

const deleteUserById = (userId) => usersRepo.deleteUserById(userId);

const updateUser = (user) => usersRepo.updateUser(user);

module.exports = { getAll, create, getById, deleteUserById, updateUser };
