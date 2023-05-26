import React from 'react';
import Logo from  '../Components/Logo';
import laptop from '../assets/Laptop 1.png';
import '../Login.css'



function Login() {
  return (
    <div className="container">
        <div className='left-side'>
          <div className='background-container'> 
              {/* <div className='laptop-resize'>
                  <img src={laptop} alt='laptop'/>
              </div>  */}
              <div className='login-logo'>
              <Logo/>
              </div> 
              <p className='footnote'>
                  money is a termPay master but an paceSett
              </p>

          </div>
            
        </div>

    </div>
  )
}

export default Login
