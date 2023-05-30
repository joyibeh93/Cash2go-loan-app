import React from 'react'
import LoginBg from '../Components/LoginBg'
import ResetPasswordForm from '../Components/ResetPasswordForm'


const PasswordResetPage = () => {
  return (
    <div className="container">
      <div className="left-side">
        <LoginBg />
      </div>
      <div className="right-side">
        <ResetPasswordForm />
      </div>
    </div>
  )
}

export default PasswordResetPage