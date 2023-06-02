import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/QuestionForm.css';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import '../Styles/OtpForm.css';
import Congrats from '../assets/congratulations.svg';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  Question: Yup.string().required('please select a security question'),
  Answer: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'only text is allowed')
    .required('please fill your answer'),
});

const initialValues = {
  Question: '',
  Answer: '',
};

const ResetPasswordForm2 = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    //show modal component popup
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // navigate to login page after modal popup
  };
  const goToPassword3 = () => {
    navigate('/resetpassword3');
  };

  const Modal = () => {
    //  modal component popup
    return (
      <div>
        <div className="modal">
          <button className="close-modal" onClick={handleModalClose}>
            &times;
          </button>
          <img src={Congrats} alt="good-mark" className="good" />
          <h3>Reset Link</h3>
          <p>
            A Password reset link have been sent to{' '}
            <span>myworkemail@work.com</span>
          </p>
          <button className="continue" onClick={goToPassword3}>
            Continue
          </button>
        </div>
        <div overlay="true"></div>
      </div>
    );
  };

  // const handleSubmit = (values) => {
  // generate a random id
  // const id = nanoid();
  //add id to values object
  // values.id = id;
  // Handle form submissions
  // navigate('/login');
  // console.log(values);
  // }
  return (
    <div className="form-container">
      <Formik
        //passes the initial values of the form as an object
        initialValues={initialValues}
        //validates form input
        validationSchema={validationSchema}
        // Handle form submission
        onSubmit={(values) => {
          // generate a random id
          const id = nanoid();
          //add id to values object
          values.id = id;
          console.log(values);
          handleModalOpen();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label className="label" htmlFor="Question">
              Select your security question
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
              <Buttons button="Reset" />
            </div>
          </Form>
        )}
      </Formik>
      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
      {/* {renders modal component if showModal is true otherwise renders nothing} */}
      {showModal && <Modal />}
      {showModal && <div className="overlay"></div>}
    </div>
    
  );
};

export default ResetPasswordForm2;
