import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import '../OtpForm.css';
import '../Signupstep3.css';
import eyeIcon from '../assets/eye icon.svg';

const SignIn = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please re-enter your password'),
  });

  const navigate = useNavigate(); // Initialized the useNavigate hook
  const [showPassword, setShowPassword] = useState(false) // Added state for password visibility

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);

    navigate('/signupstep4'); // Navigate to the next page
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ username: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label htmlFor="username" className="label">
            Username
          </label>
          <Field
            className="input"
            type="text"
            id="username"
            name="username"
            placeholder="myworkemail@work.com"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="error-message"
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <div className='password-input-container'>
          <Field
            className="input password-input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="password"
            name="password"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="password-toggle-icon"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />

          <label htmlFor="confirmpassword" className="label">
            Re-enter Password
          </label>
          <div className='password-input-container'>
          <Field
            className="input password-input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="password-toggle-icon"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />
          </div>
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />

          <div className="button">
            <Buttons button="Sign up" />
          </div>
          <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
