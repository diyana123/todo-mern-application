import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import {Logo} from "../components"
import customFetch from "../utils/customFetch";
import {toast} from 'react-toastify';



const Login = () => {

  const navigate = useNavigate();

  const [formDataLogin,setFormDataLogin] = useState({
    email:"",
    password:""
  })

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',

    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
const {name,value} = e.target;
setFormData((prevData) => ({...prevData, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors={msg:''};
    if (formData.password.length < 8){
      errors.msg = 'Password must be at least 8 characters long';
      return errors;
    }

    try {
      await customFetch.post('/auth/register', formData);
      toast.success('User created successfully');
      navigate('/login');
    } catch (error) {
      // toast.error(error?.response?.data?.msg);
      errors.msg = error?.response?.data?.msg;
      return errors;
      // console.error(error);
    }
  }

  const handleInputChangeLogin = (e) => {
    const {name,value} = e.target;
    setFormDataLogin((prevData) => ({...prevData, [name]: value}));
  }

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      await customFetch.post('/auth/login', formDataLogin);
      toast.success('Logged in successfully');
      navigate('/DashboardLayout');
    }catch (error) {
      console.log(error,"errorr");
      toast.error(error?.response?.data?.error || 'An error occurred');
      console.error(error);
    }
  }

  const handleSignUpClick = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };


  
    return (


      <div>
     
      <div className="container" id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
           
         
            <input type='text' name='name'  onChange={handleInputChange} placeholder="First Name" />
            <input type='text' name='lastName'  onChange={handleInputChange} placeholder='Last Name' />
           
            <input type='email' name='email' onChange={handleInputChange}  placeholder='Email' />
            <input type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Password' />
            <button type="submit">Sign Up</button>
           
           
           
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmitLogin}>
            <h1>Sign in</h1>
            
           
            <input type='email' name='email'  onChange={handleInputChangeLogin} placeholder="Email" />
            <input type='password' name='password'  onChange={handleInputChangeLogin} placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      
  
    </div>
 
    )
}
export default Login


