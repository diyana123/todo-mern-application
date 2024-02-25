import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../Errors/customErrors.js";
import { TASK_STATUS } from "../utils/constants.js";
import mongoose from "mongoose";
import ToDo from "../models/toDoModel.js";
import User from "../models/UserModal.js";


const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no tasks")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route')
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTaskInput = withValidationErrors([
  body("task").notEmpty().withMessage("Task is required"),
  
  body("toDoStatus")
    .isIn(Object.values(TASK_STATUS))
    .withMessage("invalid task status"),

]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters"),
body("lastName").notEmpty().withMessage("lastName is required"),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateIdParam = withValidationErrors([ //only the owner of task can modify it
  param("id").custom(async (value ,{req}) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new Error("invalid MongoDB id");
    const task = await ToDo.findById(value);
    if (!task) throw new NotFoundError(`no task with id : ${value}`);
   
  }),
]);




