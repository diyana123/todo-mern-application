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

    // data = {
    //   ...data,
    //   position: data.position || 'DefaultPosition', // Use actual form value or provide a default
    //   company: data.company || 'DefaultCompany',     // Use actual form value or provide a default
    //   jobLocation: data.jobLocation || 'DefaultJobLocation',
    // };
    

    
  
    try{
      await customFetch.post('/jobs',data)
      toast.success('Task added succesfully')
      return redirect('allJobs');
    }catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }

const AddJob = () => {
  const user = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Task</h4>
        <div className="form-center">
     
        
          <FormRowSelect
            labeltext="job status"
            name="jobStatus"
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

export default AddJob;



