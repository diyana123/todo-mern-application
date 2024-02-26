// import { FormRow,FormRowSelect,SubmitBtn } from '../components';
// import Wrapper from '../assets/wrappers/DashboardFormPage';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { TASK_STATUS } from "../utils/constants";
// import { Form, redirect } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import customFetch from '../utils/customFetch';
// import { useQuery } from '@tanstack/react-query';

// const singleJobQuery = (id) => {
//   console.log('Fetching data for task with id:', id); // Log before fetching data

//   return {
//     queryKey: ['tasks', id],
//     queryFn: async () => {
//       try {
//         const { data } = await customFetch.get(`/tasks/${id}`);
//         console.log('Complete API Response:', data);
//         return data;
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//       }
//     },
    
//   };
// };



// export const loader =
//   (queryClient) =>
//   async ({ params }) => {
//     try {
//       await queryClient.ensureQueryData(singleJobQuery(params.id));
//       return params.id;
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//       return redirect('/dashboard/all-tasks');
//     }
//   };
// export const action =
//   (queryClient) =>
//   async ({ request, params }) => {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);
//     try {
//       await customFetch.patch(`/tasks/${params.id}`, data);
//       queryClient.invalidateQueries(['jobs']);

//       toast.success('task edited successfully');
//       return redirect('/dashboard/all-tasks');
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//       return error;
//     }
//   };

// const EditTask = () => {
//   const id = useLoaderData();

//   const {
//     data: { task },
//   } = useQuery(singleJobQuery(id));

//   return (
//     <Wrapper>
//       <Form method='post' className='form'>
//         <h4 className='form-title'>edit task</h4>
//         <div className='form-center'>
//           <FormRow type='text' name='position' defaultValue={task.task} />
        
//           <FormRowSelect
//             name='jobStatus'
//             labelText='job status'
//             defaultValue={job.jobStatus}
//             list={Object.values(TASK_STATUS)}
//           />
         
//           <SubmitBtn formBtn />
//         </div>
//       </Form>
//     </Wrapper>
//   );
// };
// export default EditTask;
