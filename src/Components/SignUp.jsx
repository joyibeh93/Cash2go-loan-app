import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../assets/eye icon.svg';
import '../Styles/Signup1.css';
import axios from 'axios';
import OtpForm from './OtpForm';

const Signup = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    companyID: Yup.string().required('Company ID is required'),
  });
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialized the useNavigate hook
  const [status, setStatus] = useState('');
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setShowOtpForm(true);
    navigate('/signupstep2');

    const email = values.email;
    const companyID = values.companyID;
    const data = {
      email: email,
      companyID: companyID,
    };

    try {
      const response = await axios.post(
        'https://cash2go-backendd.onrender.com/api/v1/user/signup',
        data
      );

      const authenticated = response.data;
      console.log(authenticated);

      if (authenticated) {
        navigate('/signupstep2');
        // navigate(`/otp-auth?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message);
        setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="form-container" style={{ paddingTop: "190px" }}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: '', companyID: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label htmlFor="email" className="label">
            Email
          </label>
          <Field
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="myworkemail@work.com"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />

          <label htmlFor="companyID" className="label">
            Company ID
          </label>
          <Field
            className="input"
            type="text" // Corrected the input type to 'text'
            required
            maxLength={6}
            id="companyID"
            name="companyID"
            placeholder="******"
          />
          <img src={eyeIcon} className="eye1" alt="eye-icon" />
          <ErrorMessage
            name="companyID"
            component="div"
            className="error-message"
          />

          <div className="button">
            <Buttons button="Next" />
          </div>
          <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
      </Formik>
      {/* {showOtpForm && <OtpForm email={email} />} */}
    </div>
  );
};

export default Signup;


//  CODE JOY

// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Buttons from './Buttons';
// // import { useNavigate } from 'react-router-dom';
// import eyeIcon from '../assets/eye icon.svg';
// import '../Styles/Signup1.css';
// import OtpForm from './OtpForm';

// const Signup = () => {
//   const [showOtpForm, setShowOtpForm] = useState(false);
//   const [email, setEmail] = useState('');

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     companyID: Yup.string().required('Company ID is required'),
//   });

//   // const navigate = useNavigate(); // Initialized the useNavigate hook

//   const handleSubmit = (values, { setSubmitting }) => {
//     setEmail(values.email);
//     setShowOtpForm(true);
//     setSubmitting(false);
//   };

//   return (
//     <div className="form-container" style={{ paddingTop: "190px" }}>
//       <h1>Sign Up</h1>
//       {!showOtpForm && (
//         <Formik
//           initialValues={{ email: '', companyID: '' }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <Form className="form">
//             <label htmlFor="email" className="label">
//               Email
//             </label>
//             <Field
//               className="input"
//               type="email"
//               id="email"
//               name="email"
//               placeholder="myworkemail@work.com"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="error-message"
//             />

//             <label htmlFor="companyID" className="label">
//               Company ID
//             </label>
//             <Field
//               className="input"
//               type="companyID"
//               required
//               maxLength={6}
//               id="companyID"
//               name="companyID"
//               placeholder="******"
//             />
//             <img src={eyeIcon} className="eye1" alt="eye-icon" />
//             <ErrorMessage
//               name="companyID"
//               component="div"
//               className="error-message"
//             />

//             <div className="button">
//               <Buttons button="Next" />
//             </div>
//             <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//           </Form>
//         </Formik>
//       )}
//       {showOtpForm && <OtpForm email={email} />}
//     </div>
//   );
// };

// export default Signup;

// NEW CODE

// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Buttons from './Buttons';
// // import { useNavigate } from 'react-router-dom';
// import eyeIcon from '../assets/eye icon.svg';
// import '../Styles/Signup1.css
// import OtpForm from './OtpForm';
// import axios from 'axios';

// const Signup = () => {
//   const [showOtpForm, setShowOtpForm] = useState(false);
//   const [email, setEmail] = useState('');

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     companyID: Yup.string().required('Company ID is required'),
//   });

//   // const navigate = useNavigate(); // Initialized the useNavigate hook

//   const handleSubmit = (values, { setSubmitting }) => {
//     setEmail(values.email);
//     setShowOtpForm(true);
//     setSubmitting(false);
//   // const handleSubmit = (values, { setSubmitting }) => {
//   //   console.log(values);
//   //   setSubmitting(false);
//   //   navigate('/signupstep2');
//   // };
//   const handleSubmit = async (values) => {
//     try {
//       const response = await axios.post(
//         'https://cash2go-backendd.onrender.com/api/v1/user/signup',
//         values
//       );
//       const authenticate = response.data;
//       console.log(authenticate);
//       if (authenticate) {
//         navigate('/signupstep2');
//       }
//     } catch (error) {
//       console.error(error);
//     }

//   };

//   return (
//     <div className="form-container" style={{ paddingTop: "190px" }}>
//       <h1>Sign Up</h1>
//       {!showOtpForm && (
//         <Formik
//           initialValues={{ email: '', companyID: '' }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <Form className="form">
//             <label htmlFor="email" className="label">
//               Email
//             </label>
//             <Field
//               className="input"
//               type="email"
//               id="email"
//               name="email"
//               placeholder="myworkemail@work.com"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="error-message"
//             />

//             <label htmlFor="companyID" className="label">
//               Company ID
//             </label>
//             <Field
//               className="input"
//               type="companyID"
//               required
//               maxLength={6}
//               id="companyID"
//               name="companyID"
//               placeholder="******"
//             />
//             <img src={eyeIcon} className="eye1" alt="eye-icon" />
//             <ErrorMessage
//               name="companyID"
//               component="div"
//               className="error-message"
//             />

//             <div className="button">
//               <Buttons button="Next" />
//             </div>
//             <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//           </Form>
//         </Formik>
//       )}
//       {showOtpForm && <OtpForm email={email} />}
//     </div>
//   );
// };

// export default Signup;

