import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../assets/eye icon.svg';
import '../Styles/Signup1.css';
const Signup = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    companyID: Yup.string().required('Company ID is required'),
  });

  const navigate = useNavigate(); // Initialized the useNavigate hook

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    navigate('/signupstep2');
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
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
            type="companyID"
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
    </div>
  );
};

export default Signup;
