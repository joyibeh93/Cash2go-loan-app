import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';

import '../Signupstep3.css';

const SignIn = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please re-enter your password'),
  });

  const navigate = useNavigate(); // Initialized the useNavigate hook

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);

    navigate('/signupstep4'); // Navigate to the next page
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
          <Field
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />

          <label htmlFor="confirmpassword" className="label">
            Re-enter Password
          </label>
          <Field
            className="input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />

          <div className="btn">
            <Buttons button="Sign up" />
          </div>
          <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
