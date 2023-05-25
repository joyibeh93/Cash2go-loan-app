import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../Signupstep3.css'

const SignIn = () => {

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string()
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Please re-enter your password')
    });

    const navigate = useNavigate(); // Initialized the useNavigate hook

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);

        navigate('/signupstep4');  // Navigate to the next page
    };

    return (
        <div className='signin'>
            <Formik
                initialValues={{ username: '', password: '', confirmPassword: '', }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field className='field' type="text" id="username" name="username" placeholder="myworkemail@work.com" />
                        <ErrorMessage name="username" component="div" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field className='field' type="password" id="password" name="password" placeholder="********" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <div>
                        <label htmlFor="confirmpassword">Re-enter Password</label>
                        <Field className='field' type="password" id="confirmpassword" name="confirmpassword" placeholder="********" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <button type="submit">Sign up</button>
                    <p>Term of use &nbsp; &nbsp; Privacy policy</p>
                </Form>
            </Formik>
        </div>
    );
};

export default SignIn;