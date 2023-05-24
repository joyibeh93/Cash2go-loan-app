import React from 'react';
import Logo from './Logo';
import StepsContainer from './StepsContainer';
import SignIn from './SignIn';
import '../Signupstep3.css'

const SignInPage = () => {

  return (
    <div className="container">
    <div className="left-side">
        <Logo />
        <div className="check">
            <StepsContainer />
        </div>
    </div>
    <div className="right-side">
        <SignIn />
    </div>

</div> 
   
  )
}

export default SignInPage