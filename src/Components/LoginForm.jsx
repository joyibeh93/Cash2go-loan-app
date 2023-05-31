import React from 'react';
import Buttons from './Buttons';
import eyeIcon from '../assets/eye icon.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../Login.css';
// import eyeIcon from '../assets/eye icon.svg';

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string().required('Password is required '),
});

export const LoginForm = () => {
  return (
    <div className="login-container">
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
            <form noValidate onSubmit={handleSubmit} className="form-login">
              <span className="loginheader">Login</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="myworkemail@work.com"
                //   className="form-control inp_text"
                id="email"
                className="login-input"
              />
              {/* If validation is not passed show errors */}
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="login-input"
                //   placeholder="Enter password"
                //   className="form-control"
              />
               <img src={eyeIcon} className="login-eye" alt="eye-icon" />
              {/* If validation is not passed show errors */}
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
              {/* Click on submit button to submit the form */}
              <div className="login-btn">
                <Buttons button="Login" />
              </div>
            </form>
          </div>
        )}
      </Formik>
      <div className="footnote">
        <p>
          <Link to="/resetpassword"> Forgot Password? </Link> &nbsp; &nbsp;
          &nbsp; &nbsp; <Link to="/"> Sign Up </Link>
        </p>
        <div className="footnote2">
          <p>Term of use &nbsp; &nbsp; &nbsp; &nbsp; Privacy policy</p>
        </div>
      </div>
    </div>
  );
};
