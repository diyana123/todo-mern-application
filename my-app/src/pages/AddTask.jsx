import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { useOutletContext } from "react-router-dom";
import { TASK_STATUS } from "../utils/constants";
import { toast } from "react-toastify";
import { Form, useNavigation, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { useState } from "react";

export const action = async ({request}) => {
    const formData = await request.formData()
    let data = Object.fromEntries(formData)

   
    

    
  
    try{
      await customFetch.post('/tasks',data)
      toast.success('Task added succesfully')
      return redirect('allTasks');
    }catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }

const AddTask = () => {
  const user = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Task</h4>
        <div className="form-center">
     
        <input type="text" name="task" placeholder="Input Task" />
        
          <FormRowSelect
            labeltext="Status of the Task"
            name="toDoStatus"
            defaultValue={TASK_STATUS.PENDING}
            list={Object.values(TASK_STATUS)}
            
          />
        
         <button
            type='submit'
            className='btn btn-block form-btn '
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddTask;



