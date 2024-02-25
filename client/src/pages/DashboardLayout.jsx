import { createContext, useContext, useState,useEffect} from "react";
import { Outlet,useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

import customFetch from "../utils/customFetch";
import {toast} from 'react-toastify';

                                




const DashboardContext = createContext();



const DashboardLayout = () => {

    const [user,setUser] = useState("");
    const [showSidebar ,  setShowSidebar] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await customFetch.get('/users/current-user');
            // Assuming the API response contains the user data
            const userData = response.data.userWithoutPassword
            ;
            const username =  userData.name;
            console.log(username)
            console.log(userData,"userdata")
            setUser(userData)
           
          } catch (error) {
            console.error('Error fetching user data:', error);
            navigate('/')
          }
        };
    
        // Call the function to fetch user data when the component mounts
        fetchUserData();
        
      }, []); //
      console.log(user,"USER")

// const user = {name : "John Doe"}





const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log('sidebar')
}

const logoutUser = async  () => {
    console.log('logout user')
    navigate('/');
    await customFetch.get('/auth/logout')
    toast.success('Logging out')
}



    return (
        <DashboardContext.Provider value = {{user,toggleSidebar,showSidebar,logoutUser}}>
 <Wrapper>
       <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
        <Navbar/>
        <div className="dashboard-page">
        <Outlet context={{user}}/>
        </div>
        </div>
      
       
       </main>
    
        </Wrapper>
        </DashboardContext.Provider>
       
    );
}
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;