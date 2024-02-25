import React from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllTasks';
import {FormRowSelect} from '../components';
import { TASK_STATUS } from "../utils/constants";

const JobsContainer = () => {
  const data = useAllJobsContext();

  if (data && data.tasks) {
    const jobsArray = data.tasks;

    if (jobsArray.length === 0) {
      return <p>No Tasks</p>;
    } else {
      return (
        <div>
          {/* Map and render your jobs here */}
          {jobsArray.map((task) => (
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

            </div>
          ))}
        </div>
      );
    }
  } else {
    return <p>The 'jobs' property is not present in the data or is undefined.</p>;
  }
};

export default JobsContainer;
