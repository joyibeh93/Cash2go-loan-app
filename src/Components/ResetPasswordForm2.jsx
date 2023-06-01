import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Buttons from './Buttons';
import { useNavigate } from 'react-router';
import Congrats from '../assets/congratulations.svg';

const ResetPasswordForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const goToPassword3 = () => {
    navigate('/resetpassword3');
  };
  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate API request to reset password
    axios
      .post('/api/reset-password', values)
      .then((response) => {
        // Handle successful password reset
        console.log('Password reset successfully.');
        setIsFormSubmitted(true); // Set formSubmitted to true after successful submission
      })
      .catch((error) => {
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
      <h1>Reset Password</h1>
      <Formik
        initialValues={{ securityQuestion: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <label className="label" htmlFor="Question">
              Security Question
            </label>
            <Field as="select" id="Question" name="Question" className="input">
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

            <label htmlFor="message" className="Label">
              Your answer
            </label>
            <Field type="text" id="message" name="message" className="input" />
            <ErrorMessage
              name="message"
              component="div"
              className="error-message"
            />

            <div className="button">
              <Buttons button="Reset" onClick={openModal} />
            </div>
          </Form>
        )}
      </Formik>
      {showModal && isFormSubmitted && (
        <div className="modal">
          <button class="close-modal" onClick={closeModal}>
            &times;
          </button>
          <img src={Congrats} alt="good-mark" className="good" />
          <h3>Reset Link</h3>
          <p>A password resent link have been sent to myworkemail@work.com</p>
          <button className="continue" onClick={goToPassword3}>
            Continue
          </button>
        </div>
      )}
      {showModal && <div className="overlay"></div>}
      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
    </div>
  );
};

export default ResetPasswordForm;
