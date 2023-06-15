
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Buttons from './Buttons';
import eyeIcon from '../assets/eye icon.svg';
import OtpForm from './OtpForm';
import '../Styles/Signup1.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    companyID: Yup.string().required('Company ID is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const email = values.email;
    const companyID = values.companyID;

    try {
      const response = await fetch(
        'https://cash2go-backendd.onrender.com/api/v1/user/send-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            companyID: companyID,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const isAuthenticated = data;
        console.log(isAuthenticated);

        if (isAuthenticated) {
          setEmail(values.email);
          setShowOtpForm(true);
          navigate('../SignUpStep2');
        }
      } else {
        setSignUpMessage(data.message);
        setTimeout(() => {
          setSignUpMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSignUpMessage('An error occurred during the request.');
      setTimeout(() => {
        setSignUpMessage('');
      }, 5000);
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
          <ErrorMessage name="email" component="div" className="error-message" />

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
          <ErrorMessage name="companyID" component="div" className="error-message" />

          <div className="button">
            <Buttons button="Next" />
          </div>
          <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
      </Formik>
      {showOtpForm && <OtpForm email={email} />}
      <div style={{ textAlign: 'center', color: 'red' }}>
        {signupMessage && <p className="login-message">{signupMessage}</p>}
      </div>
    </div>
  );
};

export default Signup;
