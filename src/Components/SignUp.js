import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../SignUp.css'

const Signup = () => {

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        companyID: Yup.string().required('Company ID is required'),

    });

    const handleSubmit = (values, { setSubmitting }, reset) => {
        console.log(values);
        setSubmitting(false);
        reset();
    };

    return (
        <div className='signup'>
            <h2>Sign Up</h2>
            <Formik
                initialValues={{ email: '', companyID: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <Field className='field' type="email" id="email" name="email" placeholder="myworkemail@work.com" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div className='companyID'>
                        <label htmlFor="companyID">Company ID</label>
                        <Field className='field' type="companyID" required maxLength={6} id="companyID" name="companyID" placeholder="123ABC" />
                        <ErrorMessage name="companyID" component="div" />
                    </div>

                    <button type="submit">Next --></button>
                    <p>Term of use &nbsp; &nbsp; Privacy policy</p>
                </Form>
            </Formik>
        </div>
    );
};

export default Signup;
