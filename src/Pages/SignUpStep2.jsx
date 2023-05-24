import React from 'react';
import Logo from '../Components/Logo';
import StepsContainer from '../Components/StepsContainer';
import OtpForm from '../Components/OtpForm';

const SignUpStep2 = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="background-container">
          <Logo />
          <div className="check">
            <StepsContainer />
          </div>
        </div>
        <div className="right-side otp">
          <OtpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpStep2;
