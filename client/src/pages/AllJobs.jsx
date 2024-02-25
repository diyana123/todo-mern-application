import React,{useState,useEffect} from 'react';
import {toast} from 'react-toastify';
import { JobsContainer} from '../components'; 
import axios from "axios";
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';   
import { useContext,createContext } from 'react';  

// export const loader = async () => {
//     try {
//         const {data} = await axios.get('/api/v1/jobs');
//         console.log('Data from API:', data);
//         return {data}
//     }catch (error) {
//         toast.error(error?.response?.data?.msg);
//         return error;
//     }
// }

const AllJobsContext = createContext();

const AllJobs = () => {
// const {data} = useLoaderData();

const[data,setData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await axios.get('/api/v1/jobs');
        console.log('API response:', response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error(error?.response?.data?.msg);
      }
    };
  
    fetchData();
  }, []);
  

    return (
      <AllJobsContext.Provider value = {data}>
  
      <JobsContainer />
      </AllJobsContext.Provider>
    )
}

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs