import React from 'react';
import LoginBg from '../Components/LoginBg';
import { LoginForm } from '../Components/LoginForm';
//import Logo from  '../Components/Logo';
//import laptop from '../assets/Laptop 1.png';

import '../Login.css'



function Login() {
  return (
    <div className="container">
      <div className='login-flex'>
          <div className="left-side">
              <LoginBg/>
          </div>
          <div>
            <div className='center-login'>
              <LoginForm/>
            </div>
          
          </div>
      </div>
    </div>
  )
}

export default Login
