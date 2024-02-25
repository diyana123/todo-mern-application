import { Router } from 'express';
const router = Router();

import {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
} from '../controllers/TaskController.js';
import { validateTaskInput,validateIdParam } from "../middleware/validationMiddleware.js";


router.route('/').get(getAllTasks).post(validateTaskInput,createTask);
router.route('/:id').get(validateIdParam,getTask).delete(validateIdParam,deleteTask);

export default router;