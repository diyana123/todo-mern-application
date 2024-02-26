import React from 'react';
import { Link, Form } from 'react-router-dom';

import { useAllJobsContext } from '../pages/AllTasks';
import {FormRowSelect} from '../components';
import { TASK_STATUS } from "../utils/constants";

const JobsContainer = () => {
  const data = useAllJobsContext();

  if (data && data.tasks) {
    const taskArray = data.tasks;

    if (taskArray.length === 0) {
      return <p>No Tasks</p>;
    } else {
      return (
        <div>
          {/* Map and render your jobs here */}
          {taskArray.map((task) => (
            <div key={task._id}>
              {/* Your job data rendering logic */}
              Task
              <p>{task.task}</p>

              <FormRowSelect
            labeltext="Status of the Task"
            name="toDoStatus"
            defaultValue={task.toDoStatus}
            list={Object.values(TASK_STATUS)}
            
          />

{/* <Link to={`../edit-job/${task._id}`} className='btn edit-btn'>

          </Link> */}
        

            </div>
          ))}
        </div>
      );
    }
  } else {
    return <p>The task property is not present in the data or is undefined.</p>;
  }
};

export default JobsContainer;
