import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../QuestionForm.css'

const validationSchema = Yup.object().shape({
  Question: Yup.string().required('please select a security question'),
  Answer: Yup.string().required('please fill your answer'),

});

const initialValues = {
  Question: '',
  Answer: '',
};

const QuestionForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };
  return (
    <div className='form-container'>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
            <label htmlFor="Question">Select your security question</label>
            <Field as="select" id="Question" name="Question">
              <option value="">Select a question</option>
              <option value="Where did you meet your spouse?">where did you meet your spouse?</option>
            <option value="What city did you grow up?">what city did you grow up?</option>
            <option value="What is the name of your pet?">what is the name of your pet?</option>
            <option value="Where is your best subject?">what is your best subject?</option>
            <option value="What is the name of your school?">what is the name of your school?</option>
            </Field>
            <ErrorMessage name="Question" component="div" />
          </div>
          <div>
          <label htmlFor="Answer">Your answer</label>
          <Field type="Answer" id="Answer" name="Answer" />
          <ErrorMessage name="Answer" component="div" />
        </div>        
          <button className='btn' type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="terms">
      <p>Terms of use </p>
      <p>Privacy policy </p>
      </div>
    </div>
  );
};

export default QuestionForm