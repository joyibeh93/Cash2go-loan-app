import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import '../OtpForm.css';
import Buttons from './Buttons';

const OtpForm = () => {
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
      // Handle form submission
      console.log(values);
    },
  });

  const handleOtpChange = (index, value) => {
    const otp = [...formik.values.otp];
    otp[index] = value;
    formik.setFieldValue('otp', otp);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <Buttons button="Submit" />
    </form>
  );
};

export default OtpForm;
