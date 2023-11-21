const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getSingleTask,
  updtaeTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updtaeTask).delete(deleteTask);

module.exports = router;
