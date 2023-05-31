import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
//import '../OtpForm.css';
//import '../Signupstep3.css';
import eyeIcon from '../assets/eye icon.svg';

const ResetPassword3 = () => {
  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please re-enter your password'),
  });

  const navigate = useNavigate(); // Initialized the useNavigate hook
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);

    navigate('/login'); // Navigate to the next page
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="form-container">
        <h1>Reset Password</h1>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label className="label" htmlFor="password">
            New Password
          </label>

          <Field
            className="input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="password"
            name="password"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />

          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />

          <label htmlFor="confirmpassword" className="label">
            Confirm New Password
          </label>

          <Field
            className="input password-input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye2"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />

          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />

          <div className="button">
            <Buttons button="Reset" />
          </div>
          <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPassword3;