const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  res.send("Task created.");
};

const getSingleTask = (req, res) => {
  res.send("get single task");
};

const updtaeTask = (req, res) => {
  res.send("Task updated");
};

const deleteTask = (req, res) => {
  res.send("Task deleted.");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updtaeTask,
  deleteTask,
};
