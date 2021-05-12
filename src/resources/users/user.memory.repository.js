let users = [];

const getAll = async () => users;

const create = async (user) => {
  users.push(user);
  return user;
};

const getById = async (userId) => users.find(user => user.id === userId) || {};

const deleteUserById = async (userId) => {
  users = users.filter(user => user.id !== userId);
};

const updateUser = async (user) => {
  users = users.map(userFromStore => userFromStore.id === user.id ? user : userFromStore);
};

module.exports = { getAll, create, getById, deleteUserById, updateUser };
