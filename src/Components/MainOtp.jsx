import React from 'react';
import Logo from './Logo';
import StepsContainer from './StepsContainer';

const MainOtp = () => {
  return (
    <div className="container">
      <div className="left-side">
        <Logo />
        <div className="check">
          <StepsContainer />
        </div>
      </div>
    </div>
  );
};

export default MainOtp;
