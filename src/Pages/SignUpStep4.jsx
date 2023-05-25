import React from 'react'
import Logo from '../Components/Logo'
import StepsContainer from '../Components/StepsContainer'
import QuestionForm from '../Components/QuestionForm'
import '../index.css'


const SignUpStep4 = () => {
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
        <QuestionForm />
      </div>
    </div>
  </div>
    
  )
}

export default SignUpStep4