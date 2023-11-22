const Task = require('../models/Task');
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-err');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  if (!task)
    return next(
      createCustomError({ msg: `No task with id: ${id} exists` }, 404)
    );
  res.status(200).json({ task });
});

const updtaeTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task)
    return next(
      createCustomError({ msg: `No task with id: ${id} exists` }, 404)
    );
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  await Task.findOneAndDelete({ _id: id });
  res.status(200).json({ status: 'success', data: null });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updtaeTask,
  deleteTask,
};
