import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import '../Styles/Resetpassword3.css';
import eyeIcon from '../assets/eye icon.svg';
import Congrats from '../assets/congratulations.svg';

const ResetPassword3 = () => {
  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please re-enter your password'),
  });

  // Initialized the useNavigate hook
  const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = (values, { setSubmitting }) => {
  //   console.log(values);
  //   setSubmitting(false);
  // };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const { password } = values;
    const data = {
      password: password,
    };

    try {
      const response = await fetch(
        'https://cash2go-backendd.onrender.com/api/v1/user/resetPassword',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  // Added state for password visibility
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h1>Reset Password</h1>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          openModal();
          handleSubmit();
        }}
      >
        <Form className="form">
          <label className="label" htmlFor="password">
            New Password
          </label>

          <Field
            className="input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="password"
            name="password"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye-1"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />

          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />

          <label htmlFor="confirmpassword" className="label">
            Confirm New Password
          </label>

          <Field
            className="input password-input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye-2"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />

          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />

          <div className="button">
            <Buttons button="Reset" />
          </div>
        </Form>
      </Formik>
      {showModal && (
        <div className="modal">
          <button class="close-modal" onClick={closeModal}>
            &times;
          </button>
          <img src={Congrats} alt="good-mark" className="good" />
          <h3>Password Changed</h3>
          <p>
            Congratulations your password has been successfully changed.You may
            now proceed to log in.
          </p>
          <button className="continue" onClick={goToLogin}>
            Continue
          </button>
        </div>
      )}
      {showModal && <div className="overlay"></div>}

      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
    </div>
  );
};

export default ResetPassword3;
