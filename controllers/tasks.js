const Task = require('../models/Task');
const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getSingleTask = (req, res) => {
  res.send('get single task');
};

const updtaeTask = (req, res) => {
  res.send('Task updated');
};

const deleteTask = (req, res) => {
  res.send('Task deleted.');
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updtaeTask,
  deleteTask,
};
