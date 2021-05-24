let tasks = [];

const getAll = async (boardId) => tasks.filter(task => task.boardId === boardId);

const create = async (user) => {
  tasks.push(user);
  return user;
};

const getById = async (boardId, taskId) => tasks.find(task => task.id === taskId && task.boardId === boardId);

const deleteTaskById = async (boardId, taskId) => {
  tasks = tasks.filter(task => !(task.id === taskId && task.boardId === boardId));
};

const updateTask = async (task) => {
  tasks = tasks.map(taskFromStore => taskFromStore.id === task.id ? task : taskFromStore);
};

const deleteTasksForUser = async (userId) => {
  tasks = tasks.map(task => (task.userId === userId ? { ...task, userId: null, } : task));
};

const deleteTasksForBoard = async (boardId) => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

module.exports = { getAll, create, getById, deleteTaskById, updateTask, deleteTasksForUser, deleteTasksForBoard };
