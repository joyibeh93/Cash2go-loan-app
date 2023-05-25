import React from 'react';
import Logo from '../Components/Logo';
import StepsContainer from '../Components/StepsContainer';
import SignIn from '../Components/SignUpStep3';
import '../Signupstep3.css'

const SignUpStep3page = () => {

  return (

    <div className="container">
      <div className="left-side">
        <div className="background-container">
          <Logo />
          <div className="check">
            <StepsContainer />
          </div>
        </div>
        <div className="right-side">
          <SignIn />
        </div>
      </div>
    </div>
   
  )
}

export default SignUpStep3page;