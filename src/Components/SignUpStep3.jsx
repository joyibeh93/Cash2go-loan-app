// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate, Link } from 'react-router-dom';
// import Buttons from './Buttons';
// import '../Styles/OtpForm.css';
// import '../Styles/Signupstep3.css';
// import eyeIcon from '../assets/eye icon.svg';

// const SignIn = () => {
//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Please re-enter your password'),
//   });

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user', {
//         method: ' POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: values.username,
//           password: values.password,
//         }),
//       });

//       if (response.ok) {
//         console.log('Data posted successfully!');
//         navigate('/signupstep4');
//       } else {
//         console.log('Error while posting data.');
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }

//     setSubmitting(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={{ username: '', password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="form" style={{ paddingTop: '190px' }}>
//           <label htmlFor="username" className="label">
//             Username
//           </label>
//           <Field
//             className="input"
//             type="text"
//             id="username"
//             name="username"
//             placeholder="myworkemail@work.com"
//           />
//           <ErrorMessage
//             name="username"
//             component="div"
//             className="error-message"
//           />

//           <label className="label" htmlFor="password">
//             Password
//           </label>

//           <Field
//             className="input"
//             type={showPassword ? 'text' : 'password'}
//             id="password"
//             maxLength={8}
//             name="password"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility}
//           />

//           <ErrorMessage
//             name="password"
//             component="div"
//             className="error-message"
//           />

//           <label htmlFor="confirmpassword" className="label">
//             Re-enter Password
//           </label>

//           <Field
//             className="input password-input"
//             type={showPassword ? 'text' : 'password'}
//             id="confirmPassword"
//             maxLength={8}
//             name="confirmPassword"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye2"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility}
//           />

//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className="error-message"
//           />

//           <div className="button">
//             {/* <Buttons button="Sign Up" /> */}
//             <Link to="/signupstep4" className="button">
//               <Buttons button="Sign Up" />
//             </Link>
//           </div>
//           <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SignIn;







// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import Buttons from './Buttons';
// import '../Styles/OtpForm.css';
// import '../Styles/Signupstep3.css';
// import eyeIcon from '../assets/eye icon.svg';

// const SignIn = () => {
//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Please re-enter your password'),
//   });

//   const navigate = useNavigate(); // Initialized the useNavigate hook
//   const [showPassword, setShowPassword] = useState(false); // Added state for password visibility

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     setSubmitting(false);

//     navigate('/signupstep4'); // Navigate to the next page
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={{ username: '', password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="form" style={{paddingTop:"190px"}}>
//           <label htmlFor="username" className="label">
//             Username
//           </label>
//           <Field
//             className="input"
//             type="text"
//             id="username"
//             name="username"
//             placeholder="myworkemail@work.com"
//           />
//           <ErrorMessage
//             name="username"
//             component="div"
//             className="error-message"
//           />

//           <label className="label" htmlFor="password">
//             Password
//           </label>

//           <Field
//             className="input"
//             type={showPassword ? 'text' : 'password'} // Updated the type attribute
//             id="password"
//             name="password"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility} // Added onClick event handler
//           />

//           <ErrorMessage
//             name="password"
//             component="div"
//             className="error-message"
//           />

//           <label htmlFor="confirmpassword" className="label">
//             Re-enter Password
//           </label>

//           <Field
//             className="input password-input"
//             type={showPassword ? 'text' : 'password'} // Updated the type attribute
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye2"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility} // Added onClick event handler
//           />

//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className="error-message"
//           />

//           <div className="button">
//             <Buttons button="Sign up" />
//           </div>
//           <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate} from 'react-router-dom';
//import Buttons from './Buttons';
import '../Styles/OtpForm.css';
import '../Styles/Signupstep3.css';
import eyeIcon from '../assets/eye icon.svg';

const SignIn = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please re-enter your password'),
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.username,
          password: values.password,
        }),
      });

      if (response.ok) {
        console.log('Login successful!');
        // Perform any desired actions after successful login
        navigate('/dashboard'); // Replace '/dashboard' with the desired route
      } else {
        console.log('Error while logging in.');
        // Handle the login error, show error message, etc.
      }
    } catch (error) {
      console.log('Error:', error);
      // Handle the fetch error, show error message, etc.
    }

    setSubmitting(false);
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
        <Form className="form" style={{ paddingTop: '190px' }}>
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
            type={showPassword ? 'text' : 'password'}
            id="password"
            maxLength={8}
            name="password"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye"
            alt="eye-icon"
            onClick={togglePasswordVisibility}
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
            className="input password-input"
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            maxLength={8}
            name="confirmPassword"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye2"
            alt="eye-icon"
            onClick={togglePasswordVisibility}
          />

          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />

          <div className="button">
            <button type="submit" className="button">
              Sign In
            </button>
          </div>
          <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
