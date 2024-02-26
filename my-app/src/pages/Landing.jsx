import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';


// import { Logo } from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       
       
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Task <span>Tracking</span> App
          </h1>
          <p>
          Introducing our task tracking app – your ultimate companion for seamless productivity! Stay in control of your daily tasks and projects with an intuitive and user-friendly interface. 
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login 
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;