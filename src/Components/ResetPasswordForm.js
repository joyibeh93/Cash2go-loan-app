import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Buttons from './Buttons';
import { useNavigate } from 'react-router';
import '../PasswordReset.css'



const ResetPasswordForm = () => {

  const navigate = useNavigate(); // Get the navigation function

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate API request to reset password
    axios.post('/api/reset-password', values)
      .then(response => {
        // Handle successful password reset
        console.log('Password reset successfully.');
        navigate('/resetpassword3'); // Navigate to the next page
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
            <label className="label" htmlFor="Question">
              Security Question
            </label>
            <Field as="select" id="Question" name="Question" className="select">
              <option value="">Select a question</option>
              <option value="Where did you meet your spouse?">
                where did you meet your spouse?
              </option>
              <option value="What city did you grow up?">
                what city did you grow up?
              </option>
              <option value="What is the name of your pet?">
                what is the name of your pet?
              </option>
              <option value="Where is your best subject?">
                what is your best subject?
              </option>
              <option value="What is the name of your school?">
                what is the name of your school?
              </option>
            </Field>
            <ErrorMessage
              name="Question"
              component="div"
              className="error-message"
            />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your answer</label>
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
