import React,{useState,useEffect} from 'react';
import {toast} from 'react-toastify';
import { JobsContainer} from '../components'; 
import axios from "axios";
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';   
import { useContext,createContext } from 'react';  



const AllJobsContext = createContext();

const AllTasks = () => {
// const {data} = useLoaderData();

const[data,setData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await axios.get('/api/v1/tasks');
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

export default AllTasks