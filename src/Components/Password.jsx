import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import Buttons from './Buttons';
import React, { useState } from 'react'
import axios from 'axios'
import '../Resetpswrd.css';
import { render } from 'react-dom';

const PasswordForm = () => {
    useState= {};
    handleSubmit= e =>{
        e.preventDefault();
    
        const data ={
            token:this.props.match.param.id,
            password:this.password,
            password_confirm:this.password_confirm
        };
    
        axios.post('reset' ,data).then(
            res =>{
                console.log(res)
                this.setState({
                    reset:true
                });
            }
        ) .catch(
            err => {
              console.log(err);
            } )  
    
    }
    
    const handleSubmit = (values) => {
  
      const id = nanoid();
      values.id = id;
  
      console.log(values);
    };

    render();{
        if (this.state.reset){
            return <Redirect to = {'/login'}/>
        }
    }
  
    return (
      <div className="form-container">
        <h1>Reset Password</h1>
        <Formik
          initialValues={{ security: '' }}
          validationSchema={SecurityPolicyViolationEvent}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <label htmlFor="security" className="label">
                New Password
              </label>
              <Field
                className="input"
                id="password"
                name="password"
                type="text"
                placeholder=""
              />
              <ErrorMessage
                name="security-question"
                component="div"
                className="error-message"
              />
             <label htmlFor="security" className="label">
                 Confirm New Password
              </label>
                <Field
                className="input"
                id="password"
                name="password"
                type="text"
                placeholder=""
              />
              <div className="btn button">
                <Buttons button="Reset" />
              </div>
            </Form>
          )}
        </Formik>
        <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
      </div>
    );
  };
  
  export default PasswordForm