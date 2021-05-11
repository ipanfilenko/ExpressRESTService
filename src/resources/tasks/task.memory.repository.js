let tasks = [];

const getAll = async () => tasks;

const create = async (user) => {
  tasks.push(user);
  return user;
};

const getById = async (userId) => tasks.find(user => user.id === userId) || {};

const deleteUserById = async (userId) => {
  tasks = tasks.filter(user => user.id === userId);
};

const updateUser = async (user) => {
  tasks = tasks.map(userFromStore => userFromStore.id === user.id ? user : userFromStore);
};

module.exports = { getAll, create, getById, deleteUserById, updateUser };
