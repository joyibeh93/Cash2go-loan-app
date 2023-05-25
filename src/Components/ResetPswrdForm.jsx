import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import Buttons from './Buttons';
import '../Resetpswrd.css';

// A validation schema for the email field using Yup
const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email incorrect')
    .required('Please enter your email address'),
});

// A functional component for the form
const ResetPasswordForm = () => {
  // A function to handle the form submission
  const handleSubmit = (values) => {
    // Generate a random id for the form data
    const id = nanoid();
    // Add the id to the values object
    values.id = id;
    // Do something with the values, such as sending them to an API
    console.log(values);
  };

  return (
    <div className="form-container">
      <h1>Reset Password</h1>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={emailSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label htmlFor="email" className="label">
              Email
            </label>
            <Field
              className="input"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
            <div className="btn re-btn">
              <Buttons button="Next" />
            </div>
          </Form>
        )}
      </Formik>
      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
    </div>
  );
};

export default ResetPasswordForm;
