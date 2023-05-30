import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../QuestionForm.css';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import '../OtpForm.css';

const validationSchema = Yup.object().shape({
  Question: Yup.string().required('please select a security question'),
  Answer: Yup.string().required('please fill your answer'),
});

const initialValues = {
  Question: '',
  Answer: '',
};

const QuestionForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    // generate a random id
    const id = nanoid();
    //add id to values object
    values.id = id;
    // Handle form submission
    navigate('/login');
    console.log(values);
  };
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label className="label" htmlFor="Question">
              Select your security question
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

            <label htmlFor="Answer" className="label">
              Your answer
            </label>
            <Field type="text" id="Answer" name="Answer" className="input" />
            <ErrorMessage
              name="Answer"
              component="div"
              className="error-message"
            />

            <div className="button">
              <Buttons button="Submit" />
            </div>
          </Form>
        )}
      </Formik>
      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
    </div>
  );
};

export default QuestionForm;
