import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import '../Styles/OtpForm.css';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
  const initialValues = {
    otp: ['', '', '', ''],
  };

  const validationSchema = yup.object().shape({
    otp: yup
      .array()
      .of(yup.string())
      .test({
        name: 'validate-otp',
        message: 'Please input the 4-digit PIN',
        test: (value) => {
          return value.join('').trim() !== '';
        },
      })
      .test({
        name: 'match-pin',
        message: 'Incorrect PIN',
        test: (value) => {
          const enteredOtp = value.join('');
          const correctPin = '1234'; // Replace with the correct PIN value
          return enteredOtp === correctPin;
        },
      }),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    const { otp } = values;
    console.log(otp.join('')); // Joined OTP value
    navigate('/signupstep3');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="OtpForm">
            <div className="otpInput">
              {Array.from({ length: 4 }).map((_, i) => (
                <input
                  key={nanoid()}
                  type="number"
                  name={`otp[${i}]`}
                  value={values.otp[i]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.otp && errors.otp[i] ? 'error' : ''}
                />
              ))}
            </div>
            {errors.otp && <div className="error-message">{errors.otp}</div>}
          </div>
          <h1>Enter OTP</h1>
          <p>Enter the 4-digit PIN sent to your email</p>
          <p>
            Click{' '}
            <span>
              <a href="/">HERE</a>
            </span>{' '}
            to resend
          </p>
          <div className="btn otp">
            <Buttons button="Submit" />
          </div>
          <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
        </form>
      )}
    </Formik>
  );
};

export default OtpForm;
