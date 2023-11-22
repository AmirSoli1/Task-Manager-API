const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task)
      return res.status(404).json({ msg: `No task with id: ${id} exists` });
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updtaeTask = (req, res) => {
  res.send('Task updated');
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findOneAndDelete({ _id: id });
    res.status(200).json({ status: 'success', data: null });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updtaeTask,
  deleteTask,
};
