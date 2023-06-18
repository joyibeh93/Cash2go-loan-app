// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';
// import '../Styles/OtpForm.css';
// import Buttons from './Buttons';

// const OtpForm = () => {
//   const validationSchema = yup.object().shape({
//     otp: yup
//       .array()
//       .of(yup.string())
//       .test({
//         name: 'validate-otp',
//         message: 'input the 4-digit PIN',
//         test: (value) => {
//           return value.join('').trim() !== '';
//         },
//       })
//       .test({
//         name: 'match-pin',
//         message: 'Incorrect PIN',
//         test: (value) => {
//           const enteredOtp = value.join('');
//           const correctPin = '1234'; // Replace with the correct PIN value
//           return enteredOtp === correctPin;
//         },
//       }),
//   });

//   const formik = useFormik({
//     initialValues: {
//       otp: ['', '', '', ''],
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       // Handle form submission
//       console.log(values);
//     },
//   });

//   const handleOtpChange = (index, value) => {
//     const otp = [...formik.values.otp];
//     otp[index] = value;
//     formik.setFieldValue('otp', otp);
//   };

//   return (
//     <form action="" onSubmit={formik.handleSubmit}>
//       <div className="OtpForm">
//         <div className="otpInput">
//           {Array.from({ length: 4 }).map((_, index) => (
//             <input
//               key={nanoid()}
//               type="number"
//               name={`otp[${index}]`}
//               value={formik.values.otp[index]}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//               onBlur={formik.handleBlur}
//               className={formik.errors.otp && formik.touched.otp ? 'error' : ''}
//             />
//           ))}
//         </div>
//         {formik.errors.otp && (
//           <div className="error-message">{formik.errors.otp}</div>
//         )}
//       </div>
//       <h1>Enter OTP</h1>
//       <p>Enter the 4 digit sent to your mail</p>
//       <p>
//         Click{' '}
//         <span>
//           <a href="/">HERE</a>
//         </span>{' '}
//         to resend
//       </p>
//       <div className="btn otp">
//            <Buttons button="Submit" disabled={!isSubmitting} />
//        </div>
//     </form>
//   );
// };

// export default OtpForm;




//  CODE THAT WORKS WITH BACKEND
// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';
// import Buttons from './Buttons';
// import { useNavigate } from 'react-router-dom';

// const OtpForm = ({ email }) => {
//   const initialValues = {
//     otp: ['', '', '', ''],
//   };
//   const [otpRequested, setOtpRequested] = useState(false);
//   const [otpError, setOtpError] = useState('');

//   const validationSchema = yup.object().shape({
//     otp: yup
//       .array()
//       .of(yup.string().required('PIN is required'))
//       .min(4, 'PIN must be exactly 4 digits')
//       .max(4, 'PIN must be exactly 4 digits'),
//   });

//   const navigate = useNavigate();

//   const sendOtpToEmail = async () => {
//     try {
//       const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/send-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setOtpRequested(true);
//         setOtpError('');
//       } else {
//         setOtpError('Failed to send OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Failed to send OTP:', error);
//       setOtpError('Failed to send OTP. Please try again.');
//     }
//   };

//   const handleVerifyOtp = async (values, { setSubmitting }) => {
//     const { otp } = values;
//     const enteredOtp = otp.join('');

//     try {
//       const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/verify-otp', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, otp: enteredOtp }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         console.log('OTP verification successful!');
//         navigate('/signupstep3');
//       } else {
//         setOtpError('Incorrect OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Failed to verify OTP:', error);
//       setOtpError('Failed to verify OTP. Please try again.');
//     }

//     setSubmitting(false);
//   };

//   return (
//     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleVerifyOtp}>
//       {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting }) => (
//         <Form>
//           <div className="OtpForm">
//             <div className="otpInput">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <Field
//                   key={nanoid()}
//                   type="number"
//                   name={`otp[${i}]`}
//                   value={values.otp[i]}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={errors.otp && errors.otp[i] ? 'error' : ''}
//                   disabled={otpRequested}
//                   autoComplete="off"
//                 />
//               ))}
//             </div>
//             {errors.otp && <ErrorMessage name="otp" component="div" className="error-message" />}
//           </div>
//           <h1>Enter OTP</h1>
//           <p>Enter the 4-digit PIN sent to your email</p>
//           <p>
//             Click{' '}
//             <span>
//               <button type="button" onClick={sendOtpToEmail} disabled={otpRequested}>
//                 HERE
//               </button>
//             </span>{' '}
//             to resend
//           </p>
//           {otpError && <p className="error-message">{otpError}</p>}
//           <div className="btn otp">
//             <Buttons button="Submit" disabled={!isSubmitting} />
//           </div>
//           <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default OtpForm;



// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';
// import Buttons from './Buttons';
// import { useNavigate } from 'react-router-dom';

// const OtpForm = ({ email }) => {
//   const initialValues = {
//     otp: ['', '', '', ''],
//   };
//   const [otpRequested, setOtpRequested] = useState(false);
//   const [otpError, setOtpError] = useState('');

//   const validationSchema = yup.object().shape({
//     otp: yup
//       .array()
//       .of(yup.string().required('PIN is required'))
//       .min(4, 'PIN must be exactly 4 digits')
//       .max(4, 'PIN must be exactly 4 digits'),
//   });

//   const navigate = useNavigate();

//   const sendOtpToEmail = async () => {
//     try {
//       const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/verify-otp', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setOtpRequested(true);
//         setOtpError('');
//       } else {
//         setOtpError('Failed to send OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Failed to send OTP:', error);
//       setOtpError('Failed to send OTP. Please try again.');
//     }
//   };

//   const handleVerifyOtp = async (values, { setSubmitting }) => {
//     const { otp } = values;
//     const enteredOtp = otp.join('');

//     try {
//       const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/verify-otp', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, otp: enteredOtp }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         console.log('OTP verification successful!');
//         navigate('/signupstep3');
//       } else {
//         setOtpError('Incorrect OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Failed to verify OTP:', error);
//       setOtpError('Failed to verify OTP. Please try again.');
//     }

//     setSubmitting(false);
//   };

//   return (
//     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleVerifyOtp}>
//       {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting }) => (
//         <Form>
//           <div className="OtpForm">
//             <div className="otpInput">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <Field
//                   key={nanoid()}
//                   type="number"
//                   name={`otp[${i}]`}
//                   value={values.otp[i]}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={errors.otp && errors.otp[i] ? 'error' : ''}
//                   disabled={otpRequested}
//                   autoComplete="off"
//                 />
//               ))}
//             </div>
//             {errors.otp && <ErrorMessage name="otp" component="div" className="error-message" />}
//           </div>
//           <h1>Enter OTP</h1>
//           <p>Enter the 4-digit PIN sent to your email</p>
//           <p>
//             Click{' '}
//             <span>
//               <button type="button" onClick={sendOtpToEmail} disabled={otpRequested}>
//                 HERE
//               </button>
//             </span>{' '}
//             to resend
//           </p>
//           {otpError && <p className="error-message">{otpError}</p>}
//           <div className="btn otp">
//             <Buttons button="Submit" disabled={!isSubmitting} />
//           </div>
//           <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default OtpForm;



// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import Buttons from './Buttons';
// import { useNavigate } from 'react-router-dom';

// const OtpForm = ({ email, nextStep }) => {
//   const initialValues = {
//     otp: ['', '', '', ''],
//   };
//   const [otpError, setOtpError] = useState('');

//   const validationSchema = yup.object().shape({
//     otp: yup
//       .array()
//       .of(yup.string().required('PIN is required'))
//       .min(4, 'PIN must be exactly 4 digits')
//       .max(4, 'PIN must be exactly 4 digits'),
//   });

//   const navigate = useNavigate();
//   const handleVerifyOtp = async (otp, email,setSubmitting) => {
//     //const { otp } = values; // Extract otp array from values object
//   //  const enteredOtp = otp.join('');

//   // const submitForm = async (otp, email) => {
//   //   setSubmitting(true); // Set form submission state to true

//     try {
//       // Send request to server to confirm OTP
//       const response = await fetch(
//         `https://cash2go-backendd.onrender.com/api/v1/user/verify-otp?email=${email}`,
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ otp: otp }),
//         }
//       );
//       const isAuthenticated = await response.json(); // Get authentication status from response

//       if (isAuthenticated) {
//         // If user is authenticated, pass the nextStep function as a prop to the parent component
//         navigate('../SignUpStep3');
//       }else {
//         setSubmitting(false);
//         setOtpError('Incorrect OTP. Please try again.');
//       }
      
//     } catch (error) {
//       console.error('Error:', error);
//       if (error.response) {
//         setOtpError(error.response.data.message); // Set error message from response
//         setTimeout(() => {
//           setOtpError('');
//         }, 5000); // Clear status message after 5 seconds
//       }
//     } finally {
//       setSubmitting(false); // Set form submission state to false
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       // Send request to server to resend OTP
//       const response = await fetch(
//         `https://cash2go-backendd.onrender.com/api/v1/user/resend-otp?email=${email}`,
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       if (response.ok) {
//         // If user is authenticated, set status message from response
//         setOtpError('New OTP has been sent. Please check your email.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setOtpError('Failed to resend OTP. Please try again.');
//       // setSubmitting(false);
//       // setStatus('Failed to verify OTP. Please try again.');
//     }
    
//   };

//   return (
//     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleVerifyOtp}>
//       {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting, setStatus }) => (
//         <Form>
//           <div className="OtpForm">
//             <div className="otpInput">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <Field
//                   key={i}
//                   type="text"
//                   name={`otp[${i}]`}
//                   value={values.otp[i]}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={errors.otp && errors.otp[i] ? 'error' : ''}
//                   autoComplete="off"
//                 />
//               ))}
//             </div>
//             {errors.otp && <ErrorMessage name="otp" component="div" className="error-message" />}
//           </div>
//           <h1>Enter OTP</h1>
//           <p>Enter the 4-digit PIN sent to your email</p>
//           <p>
//             Click{' '}
//             <span>
//               <button type="button" onClick={handleResendOTP}>
//                 HERE
//               </button>
//             </span>{' '}
//             to resend
//           </p>
//           {otpError && <p className="error-message">{otpError}</p>}
//           <div className="btn otp">
//             <Buttons button="Submit" disabled={isSubmitting} />
//           </div>
//           <p className="terms">
//             Term of use &nbsp; &nbsp; Privacy policy
//           </p>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default OtpForm;






// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import Buttons from './Buttons';
// import { useNavigate } from 'react-router-dom';

// const OtpForm = ({email}) => {
  
//   const initialValues = {
//     otp: ['', '', '', ''],
//   };
//   const [otpError, setOtpError] = useState('');

//   const validationSchema = yup.object().shape({
//     otp: yup
//       .array()
//       .of(yup.string().required('PIN is required'))
//       .min(4, 'PIN must be exactly 4 digits')
//       .max(4, 'PIN must be exactly 4 digits'),
//   });

//   const navigate = useNavigate();
  
//   const handleVerifyOtp = async (otp, setSubmitting) => {
//     try {
//       // Send request to server to confirm OTP
//       const response = await fetch(
//         `https://cash2go-backendd.onrender.com/api/v1/user/verify-otp?email=${encodeURIComponent(email)}`,
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ otp: otp }),
//         }
//       );
      
//       const isAuthenticated = await response.json(); // Get authentication status from response

//       if (isAuthenticated) {
//         // If user is authenticated, navigate to the next step
//         navigate('../SignUpStep3');
//       } else {
//         setSubmitting(false);
//         setOtpError('Incorrect OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       if (error.response) {
//         setOtpError(error.response.data.message); // Set error message from response
//         setTimeout(() => {
//           setOtpError('');
//         }, 5000); // Clear status message after 5 seconds
//       }
//     } finally {
//       setSubmitting(false); // Set form submission state to false
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       // Send request to server to resend OTP
//       const response = await fetch(
//         `https://cash2go-backendd.onrender.com/api/v1/user/resend-otp?email=${encodeURIComponent(email)}`,
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
      
//       if (response.ok) {
//         // If OTP resend is successful, set status message
//         setOtpError('New OTP has been sent. Please check your email.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setOtpError('Failed to resend OTP. Please try again.');
//     }
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={(values, { setSubmitting }) => handleVerifyOtp(values.otp, setSubmitting)}
//     >
//       {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting }) => (
//         <Form>
//           <div className="OtpForm">
//             <div className="otpInput">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <Field
//                   key={i}
//                   type="text"
//                   name={`otp[${i}]`}
//                   value={values.otp[i]}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={errors.otp && errors.otp[i] ? 'error' : ''}
//                   autoComplete="off"
//                 />
//               ))}
//             </div>
//             {errors.otp && <ErrorMessage name="otp" component="div" className="error-message" />}
//           </div>
//           <h1>Enter OTP</h1>
//           <p>Enter the 4-digit PIN sent to your email</p>
//           <p>
//             Click{' '}
//             <span>
//               <button type="button" onClick={handleResendOTP}>
//                 HERE
//               </button>
//             </span>{' '}
//             to resend
//           </p>
//           {otpError && <p className="error-message">{otpError}</p>}
//           <div className="btn otp">
//             <Buttons button="Submit" disabled={isSubmitting} />
//           </div>
//           <p className="terms">
//             Term of use &nbsp; &nbsp; Privacy policy
//           </p>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default OtpForm;


import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';

const OtpForm = ({ email }) => {
  const navigate = useNavigate();
  const [otpError, setOtpError] = useState('');

  const initialValues = {
    otp: ['', '', '', ''],
  };

  const validationSchema = yup.object().shape({

    otp: yup.string().matches(/^[0-9]{4}$/, 'Invalid OTP').required('OTP is required'),
    otp: yup
      .array()
      .of(yup.string().required('PIN is required').matches(/^[0-9]$/, 'PIN must be a number'))
      .min(4, 'PIN must be exactly 4 digits')
      .max(4, 'PIN must be exactly 4 digits'),

  const handleVerifyOtp = async (values, { setSubmitting }) => {
    try {
      const  otp = values.otp;

      const response = await fetch(
        `https://cash2go-backendd.onrender.com/api/v1/user/verify-otp?email=${encodeURIComponent(email)}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ otp }),
        }
      );

      if (response.ok) {
        const data = await response.json;
          if (data.verified){
            navigate('../SignUpStep3');
          }
          
        }
        
       else {
        setSubmitting(false);
        setOtpError('Incorrect OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitting(false);
      setOtpError('An error occurred during OTP verification.');
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await fetch(
        `https://cash2go-backendd.onrender.com/api/v1/user/resend-otp?email=${encodeURIComponent(email)}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        setOtpError('New OTP has been sent. Please check your email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOtpError('Failed to resend OTP. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleVerifyOtp}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="OtpForm">
            <div className="otpInput">
              {Array.from({ length: 4 }).map((_, i) => (
                <Field
                  key={i}
                  type="text" // Use type "number" for numeric input
                  name={`otp[${i}]`}
                  autoComplete="off"

                  inputMode="numeric" // Allow only numeric input
                  maxLength={1} // Limit input to 1 character
                  pattern="[0-9]*" // Only accept numeric characters
                  maxLength={1}

                />
              ))}
            </div>
          </div>
          <h1>Enter OTP</h1>
          <p>Enter the 4-digit OTP sent to your email address</p>
          <p>
             Click{' '}
           <span>
             <button type="button" onClick={handleResendOTP}>
              HERE
            </button>
           </span>{' '}
             to resend
          </p>
          <div style={{ color: 'red', margin: '0.5rem 0' }}>{otpError}</div>
          {otpError && <p className="error-message">{otpError}</p>}
          <div className="btn otp">
          <Buttons button="Submit"  disabled={isSubmitting} />
          </div>
          <p className="terms">
           Term of use &nbsp; &nbsp; Privacy policy
          </p>
        </Form>
        )}
       </Formik>
      );
 };

 export default OtpForm;