import React from 'react'
import Logo from './Logo';
import StepsContainer from './StepsContainer';
import SignUp from './SignUp'
import '../SignUp.css'


const SignUpPage = () => {

    return (

        <div className="container">
            <div className="left-side">
                <Logo />
                <div className="check">
                    <StepsContainer />
                </div>
            </div>
            <div className="right-side">
                <SignUp />
            </div>

        </div>
    )
}

export default SignUpPage