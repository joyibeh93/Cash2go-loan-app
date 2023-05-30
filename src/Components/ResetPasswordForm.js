import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Buttons from './Buttons';
import '../PasswordReset.css'

//import './ResetPasswordForm.css'; // Import CSS file

const ResetPasswordForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate API request to reset password
    axios.post('/api/reset-password', values)
      .then(response => {
        // Handle successful password reset
        console.log('Password reset successfully.');
      })
      .catch(error => {
        // Handle password reset error
        console.error('Error resetting password:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object().shape({
    securityQuestion: Yup.string().required('Security question is required'),
    message: Yup.string()
      .required('Message is required')
      .matches(/^[a-zA-Z\s]+$/, 'Message must contain only letters'),
  });

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <Formik
        initialValues={{ securityQuestion: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <div className="form-field">
              <label htmlFor="securityQuestion">Security Question</label>
              <Field
                type="text"
                id="securityQuestion"
                name="securityQuestion"
              />
              <ErrorMessage name="securityQuestion" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <Field
                type="text"
                id="message"
                name="message"
              />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>

            <div className="btn re-btn">
                <Buttons button="Reset" />
              </div>
          </Form>
        )}
      </Formik>
      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
    </div>
  );
};

export default ResetPasswordForm;
