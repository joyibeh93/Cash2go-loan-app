import React, { useState } from 'react';
import Buttons from './Buttons';
import eyeIcon from '../assets/eye icon.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

// import { useNavigate } from 'react-router-dom';

// import eyeIcon from '../assets/eye icon.svg';

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required ')
    .min(8, 'Password must be at least 8 characters long'),
});
// const navigate = useNavigate(); // Initialized the useNavigate hook

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
  // navigate('/dashboard');
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  // const handleSubmit = (values, { setSubmitting }) => {
  //   console.log(values);
  //   setSubmitting(false);

  //  // navigate('/dashboard'); // Navigate to the next page
  // };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-container">
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
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
                type={showPassword ? 'text' : 'password'} // Updated the type attribute
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="login-input"
                //   placeholder="Enter password"
                //   className="form-control"
              />
              <img
                src={eyeIcon}
                className="login-eye"
                alt="eye-icon"
                onClick={togglePasswordVisibility}
              />
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
          &nbsp; &nbsp; <Link to="/signupstep1"> Sign Up </Link>
        </p>
        <div className="footnote2">
          <p>Term of use &nbsp; &nbsp; &nbsp; &nbsp; Privacy policy</p>
        </div>
      </div>
    </div>
  );
};
