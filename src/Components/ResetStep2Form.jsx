import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import Buttons from './Buttons';



const ForgetPasswordForm = () => {
  
  const handleSubmit = (values) => {

    const id = nanoid();
    values.id = id;

    console.log(values);
  };

  return (
    <div className="form-container">
      <h1>Reset Password</h1>
      <Formik
        validationSchema={SecurityPolicyViolationEvent}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label htmlFor="security" className="label">
              Security Question
            </label>
            <Field
              className="input"
              id="security-question"
              name="security-question"
              type="text"
              placeholder="Where did you meet spouse?"
            />
            <ErrorMessage
              name="security-question"
              component="div"
              className="error-message"
            />
             <label htmlFor="answer" className="label">
              your answer
            </label>
              <Field
              className="input"
              id="Answer"
              name="answer"
              type="text"
              placeholder=""
            />
            <div className="btn">
              <Buttons button="Reset" />
            </div>
          </Form>
        )}
      </Formik>
      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
    </div>
  );
};

export default ForgetPasswordForm
