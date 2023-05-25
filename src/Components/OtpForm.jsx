import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import '../OtpForm.css';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    otp: yup
      .array()
      .of(yup.string())
      .test({
        name: 'validate-otp',
        message: 'input the 4-digit PIN',
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

  const formik = useFormik({
    initialValues: {
      otp: ['', '', '', ''],
    },
    validationSchema,
    onSubmit: (values) => {
      const enteredOtp = values.otp.join('');
      const correctPin = '1234'; // Replace with the correct PIN value

      // Handle form submission
      if (enteredOtp === correctPin) {
        // PIN is correct, navigate to the desired page
        navigate('/signupstep3');
      } else {
        // PIN is incorrect, handle error or show a message
        console.log('Incorrect PIN');
      }
    },
  });

  const handleOtpChange = (index, value) => {
    const otp = [...formik.values.otp];
    otp[index] = value;
    formik.setFieldValue('otp', otp);
  };

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <div className="OtpForm">
        <div className="otpInput">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={nanoid()}
              type="number"
              name={`otp[${index}]`}
              value={formik.values.otp[index]}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onBlur={formik.handleBlur}
              className={formik.errors.otp && formik.touched.otp ? 'error' : ''}
            />
          ))}
        </div>
        {formik.errors.otp && (
          <div className="error-message">{formik.errors.otp}</div>
        )}
      </div>
      <h1>Enter OTP</h1>
      <p>Enter the 4 digit sent to your mail</p>
      <p>
        Click{' '}
        <span>
          <a href="/">HERE</a>
        </span>{' '}
        to resend
      </p>
      <div className="btn">
        <Buttons button="Submit" />
      </div>
    </form>
  );
};

export default OtpForm;
