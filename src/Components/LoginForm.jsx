import React, { useState } from 'react';
import Buttons from './Buttons';
import eyeIcon from '../assets/eye icon.svg';
// import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import { Formik} from 'formik';
//import axios from 'axios';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required('Email is required')
//     .email('Invalid email format'),
//   password: Yup.string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters long'),
// });

// export const LoginForm = () => {
//   const [showPassword, setShowPassword ] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (values, { setSubmitting}, {setShowOtpForm}) => {

//     setSubmitting(true);
//     setShowOtpForm(true);
//     const email = values.email;

//     const password = values.password;
//     const data = {
//       email: email,
//       password: password,
//     };   

//     try {
//       const response = await axios.post('https://cash2go-backendd.onrender.com/api/v1/user/signup', data); 
//       console.log(response.data);
//       setSubmitting(false);
//       navigate('/dashboard');
//     } catch (error) {
//       console.log(error);
//       setSubmitting(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="login-container">
//       <Formik
//         validationSchema={schema}
//         initialValues={{ email: '', password: '' }}
//         onSubmit={handleSubmit}
//       >
//         <Form noValidate className="form-login">
//           <span className="loginheader">Login</span>
//           <label htmlFor="email">Email</label>
//           <Field
//             type="email"
//             name="email"
//             placeholder="myworkemail@work.com"
//             id="email"
//             className="login-input"
//           />
//           <ErrorMessage name="email" component="p" className="error-message" />
//           <label htmlFor="password">Password</label>
//           <Field
//             type={showPassword ? 'text' : 'password'}
//             name="password"
//             className="login-input"
//           />
//           <img
//             src={eyeIcon}
//             className="login-eye"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility}
//           />
//           <ErrorMessage name="password" component="p" className="error-message" />
//           <div className="login-btn">
//             <Buttons button="Login" type="submit" />
//           </div>
//         </Form>
//       </Formik>
//       <div className="footnote">
//         <p>
//           <Link to="/resetpassword">Forgot Password?</Link>&nbsp;&nbsp;&nbsp;&nbsp;
//           <Link to="/signupstep1">Sign Up</Link>
//         </p>
//         <div className="footnote2">
//           <p>Term of use&nbsp;&nbsp;&nbsp;&nbsp;Privacy policy</p>
//         </div>
//       </div>
//     </div>
//   );
// };



// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required ')
    .min(8, 'Password must be at least 8 characters long'),
});


export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  const navigate = useNavigate(); // Initialized the useNavigate hook


  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);

    navigate('/dashboard'); // Navigate to the next page
  };

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
                maxLength={8}
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
