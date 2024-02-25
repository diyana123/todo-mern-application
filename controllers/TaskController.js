import ToDo from "../models/toDoModel.js";
import { StatusCodes } from "http-status-codes";

//get all tasks
export const getAllTasks = async (req, res) => {
  const tasks = await ToDo.find();
  res.status(StatusCodes.OK).json({ tasks });
};

//create task
export const createTask = async (req, res) => {
  const task = await ToDo.create(req.body);

  res.status(StatusCodes.CREATED).json({ task });
};

//get single task
export const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await ToDo.findById(id);

  res.status(StatusCodes.OK).json({ task });
};

//delete task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const removedTask = await ToDo.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: "Task deleted", task: removedTask });
};
