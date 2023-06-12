import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';
import Buttons from './Buttons';
// import { Link } from 'react-router-dom';
import eyeIcon from '../assets/eye icon.svg';
import '../Styles/Signup1.css';
// import axios from 'axios';
import OtpForm from './OtpForm';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const navigate=useNavigate()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    companyID: Yup.string().required('Company ID is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const enteredOtp = values.otp;
    const email = values.email;
    const companyID = values.companyID;
    const data = {
      email: email,
      companyID: companyID,
    };

    try {

      // Send OTP
      await fetch(
        'https://cash2go-backendd.onrender.com/api/v1/user/send-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({data }),
        }
      );


      // Verify OTP
      const verifyOtpResponse = await fetch(
        'https://cash2go-backendd.onrender.com/api/v1/user/verify-otp',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, otp: enteredOtp }), // Replace enteredOtp with the actual OTP entered by the user
        }
      );

      //console.log(authenticated);
      //alert(authenticated);


      const authenticated = await verifyOtpResponse.json();

      if (authenticated) {
        setEmail(email);
        setShowOtpForm(true);
        navigate('../SignUpStep2')
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container" style={{ paddingTop: '190px' }}>
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
            type="text"
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
      {showOtpForm && <OtpForm email={email} />}
    </div>
  );
};

export default Signup;
