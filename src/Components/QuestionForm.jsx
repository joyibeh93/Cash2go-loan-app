// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import '../Styles/QuestionForm.css';
// import { nanoid } from 'nanoid';
// import { useNavigate } from 'react-router-dom';
// import Buttons from './Buttons';
// import '../Styles/OtpForm.css';
// import Congrats from '../assets/congratulations.svg';
// import { useState } from 'react';

// const validationSchema = Yup.object().shape({
//   Question: Yup.string().required('please select a security question'),
//   Answer: Yup.string()
//     .matches(/^[a-zA-Z\s]*$/, 'only text is allowed')
//     .required('please fill your answer'),
// });

// const initialValues = {
//   Question: '',
//   Answer: '',
// };

// const QuestionForm = () => {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const handleModalOpen = () => {
//     //show modal component popup
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     // navigate to login page after modal popup
//     navigate('/');
//   };

//   const Modal = () => {
//     //  modal component popup
//     return (
//       <div >
//         <div className="modal">
//           <button className="close-modal">&times;</button>
//           <img src={Congrats} alt="good-mark" className="good" />
//           <h3>Congratulations !!!</h3>
//           <p>
//             Your Signup for Cash2go app is now complete. Get ready to unlock
//             great financial possibilities and achieve your goals
//           </p>
//           <button className="continue" onClick={handleModalClose}>
//             Continue
//           </button>
//         </div>
//         <div overlay="true"></div>
//       </div>
//     );
//   };

//   // const handleSubmit = (values) => {
//   // generate a random id
//   // const id = nanoid();
//   //add id to values object
//   // values.id = id;
//   // Handle form submissions
//   // navigate('/login');
//   // console.log(values);
//   // }
//   return (
//     <div className="form-container" style={{paddingTop:"190px"}}>
//       <Formik
//         //passes the initial values of the form as an object
//         initialValues={initialValues}
//         //validates form input
//         validationSchema={validationSchema}
//         // Handle form submission
//         onSubmit={(values) => {
//           // generate a random id
//           const id = nanoid();
//           //add id to values object
//           values.id = id;
//           console.log(values);
//           handleModalOpen();
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form className="form">
//             <label className="label" htmlFor="Question">
//               Select your security question
//             </label>
//             <Field as="select" id="Question" name="Question" className="input">
//               <option value="">Select a question</option>
//               <option value="Where did you meet your spouse?">
//                 where did you meet your spouse?
//               </option>
//               <option value="What city did you grow up?">
//                 what city did you grow up?
//               </option>
//               <option value="What is the name of your pet?">
//                 what is the name of your pet?
//               </option>
//               <option value="Where is your best subject?">
//                 what is your best subject?
//               </option>
//               <option value="What is the name of your school?">
//                 what is the name of your school?
//               </option>
//             </Field>
//             <ErrorMessage
//               name="Question"
//               component="div"
//               className="error-message"
//             />

//             <label htmlFor="Answer" className="label">
//               Your answer
//             </label>
//             <Field type="text" id="Answer" name="Answer" className="input" />
//             <ErrorMessage
//               name="Answer"
//               component="div"
//               className="error-message"
//             />

//             <div className="button">
//               <Buttons button="Submit" />
//             </div>
//           </Form>
//         )}
//       </Formik>
//       <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//       {/* {renders modal component if showModal is true otherwise renders nothing} */}
//       {showModal && <Modal />}
//       {showModal && <div className="overlay"></div>}
//     </div>
//   );
// };

// export default //QuestionForm;


import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/QuestionForm.css';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import '../Styles/OtpForm.css';
import Congrats from '../assets/congratulations.svg';

const validationSchema = Yup.object().shape({
  Question: Yup.string().required('Please select a security question'),
  Answer: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only text is allowed')
    .required('Please provide an answer'),
});

const QuestionForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/');
  };

  const Modal = () => {
    return (
      <div>
        <div className="modal">
          <button className="close-modal" onClick={handleModalClose}>
            &times;
          </button>
          <img src={Congrats} alt="good-mark" className="good" />
          <h3>Congratulations !!!</h3>
          <p>
            Your Signup for Cash2go app is now complete. Get ready to unlock
            great financial possibilities and achieve your goals
          </p>
          <button className="continue" onClick={handleModalClose}>
            Continue
          </button>
        </div>
        <div className="overlay" onClick={handleModalClose}></div>
      </div>
    );
  };

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/security-question', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: values.Question,
          answer: values.Answer,
        }),
      });

      if (response.ok) {
        console.log('Security question saved successfully!');
        handleModalOpen();
      } else {
        console.log('Error while saving security question.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="form-container" style={{ paddingTop: '190px' }}>
      <Formik
        initialValues={{ Question: '', Answer: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label className="label" htmlFor="Question">
              Select your security question
            </label>
            <Field as="select" id="Question" name="Question" className="input">
              <option value="">Select a question</option>
              <option value="Where did you meet your spouse?">
                Where did you meet your spouse?
              </option>
              <option value="What city did you grow up?">
                What city did you grow up?
              </option>
              <option value="What is the name of your pet?">
                What is the name of your pet?
              </option>
              <option value="Where is your best subject?">
                Where is your best subject?
              </option>
              <option value="What is the name of your school?">
                What is the name of your school?
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
      <p className="terms">
        Term of use &nbsp; &nbsp; Privacy policy
      </p>
      {showModal && <Modal />}
    </div>
  );
};

export default QuestionForm;
