import React from 'react'
import LoginBg from '../Components/LoginBg';
import ForgetPasswordForm from '../Components/forgetPwd';

const Forget = () => {
    return (
        <div className="container">
          <div className="left-side">
            <LoginBg />
          </div>
          <div className="right-side">
            <ForgetPasswordForm/>
          </div>
        </div>
      );
}

export default Forget
