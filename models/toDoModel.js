import mongoose from 'mongoose';
import  {TASK_STATUS} from "../utils/constants.js";

const toDoSchema = new mongoose.Schema(
  {
    task: String,
    
    toDoStatus: {
      type: String,
      enum:Object.values(TASK_STATUS),
      default:TASK_STATUS.PENDING
    },
   
  },
  { timestamps: true }
);

export default mongoose.model('ToDo', toDoSchema);