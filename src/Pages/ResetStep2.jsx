import React from 'react';
import LoginBg from '../Components/LoginBg';
import ResetStep2Form from '../Components/ResetStep2Form';

const ResetStep2 = () => {
  return (
    <div className="container">
      <div className="left-side">
        <LoginBg />
      </div>
      <div className="right-side">
        <ResetStep2Form />
      </div>
    </div>
  );
};

export default ResetStep2;
