import React from 'react'
import Logo from '../Components/Logo'
import StepsContainer from '../Components/StepsContainer'
import QuestionForm from '../Components/QuestionForm'


const SignUpStep4 = () => {
  return (
    <div className="container">
    <div className="left-side">
      <div className="background-container">
        <Logo />
  
        <StepsContainer />
      </div>
      <div className="right-side">
        <QuestionForm />
      </div>
    </div>
  </div>
    
  )
}

export default SignUpStep4