/*import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Bvn.css'

const Bvn = () => {
  const [bvn, setBvn] = useState('');
  const [bvnError, setBvnError] = useState('');
  const navigate = useNavigate();

  const handleBvnChange = (event) => {
    const { value } = event.target;
    setBvn(value);
  };

  const handleBvnSubmit = (event) => {
    event.preventDefault();

    // Validate BVN
    if (bvn.length !== 11) {
      setBvnError('BVN must be 11 digits long.');
      return;
    }

    // Navigate to the next page
    navigate('/loandefault');
  };

  const handleBankStatementChange = (event) => {
    // Handle file input change here
  };

  const handleBankStatementSubmit = (event) => {
    event.preventDefault();

    // Handle bank statement form submit here
  };

  return (
    <div>
      <h1 className="bvn-header">Applications</h1>
      <p className="bvn-header">View All Loan application</p>
      <form className="bvn-container" onSubmit={handleBvnSubmit}>
        <h3>Use BVN</h3>
        <br />
        <p>Applicants BVN</p>
        <input
          type="text"
          name="bvn"
          required
          className="input-field"
          placeholder="2380111111111111"
          inputMode="numeric"
          pattern="[0-9]*"
          value={bvn}
          onChange={handleBvnChange}
        />
        {bvnError && <p className="error-message">{bvnError}</p>}
        <br/><br/>
        <button type="submit" className="submit-button"> Next <span>&#8594;</span></button>
      </form>

      <form className="bvn-container" onSubmit={handleBankStatementSubmit}>
        <h3 className='bank-statement'>Upload Bank Statement</h3>
        <br></br>
        <p className='bank-details'>Upload Bank Details</p>
        <input
          type="file"
          name="bankStatement"
          required
          className="input-field file-field"
          placeholder=""
          onChange={handleBankStatementChange}
        />
        <p className='upload-pdf'>Upload PDF. Check sample Here</p>

        {bvnError && <p className="error-message">{bvnError}</p>}
        <br/><br/>
        <button type="submit" className="submit-button btn-file-submit"> Next <span>&#8594;</span></button>
      </form>
    </div>
  );
}

export default Bvn;*/


import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import '../Styles/LoanDefault.css'

const initialValues = {
  id: "",
  first_name: "",
  surname: "",
  gender: "",
  date_of_birth: "",
  state_of_origin: "",
  address: "",
  work_address: "",
  phone_number: "",
  next_of_kin_phone_number: "",
};


const Bvn = () => {
const navigate = useNavigate();

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);

    // Navigate to the next page
    navigate('/loandefault')
  };

  return (
    <div className="form-containersss">
      <h1 className="predict-h1">Predict Loan Default</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="Loan_form">
          <div className="column">
            <div className="row">
              <h3 className="predict-h3">ID Number</h3>
              <Field
                as="select"
                type="text"
                id="id_number"
                name="id_number"
                className="input"
              >
               <option value="">Select an option</option>
              <option value="">ID 203349120</option>
              <option value="">ID 203349121</option>
              <option value="">ID 203349122</option>
              <option value="">ID 203349123</option>
              <option value="">ID 203349124</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">First Name</h3>
              <Field
                type="text"
                name="first_name"
                required
                placeholder="First Name"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Surname</h3>
              <Field
                type="text"
                name="surname"
                required
                placeholder="Surname"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Gender</h3>
              <Field
                as="select"
                type="text"
                id="gender"
                name="gender"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">Date of Birth</h3>
              <Field
                type="text"
                name="date_of_birth"
                required
                placeholder="DD/MM/YY"
                className="loan-default"
              />
            </div>
          </div>

          <div className="column">
            <div className="row">
              <h3>State Of Origin</h3>
              <Field
                as="select"
                type="text"
                id="id_number"
                name="id_number"
                className="input"
              >
               <option value="">Select an option</option>
  <option value="Abia">Abia</option>
  <option value="Adamawa">Adamawa</option>
  <option value="Akwa Ibom">Akwa Ibom</option>
  <option value="Anambra">Anambra</option>
  <option value="Bauchi">Bauchi</option>
  <option value="Bayelsa">Bayelsa</option>
  <option value="Benue">Benue</option>
  <option value="Borno">Borno</option>
  <option value="Cross River">Cross River</option>
  <option value="Delta">Delta</option>
  <option value="Ebonyi">Ebonyi</option>
  <option value="Edo">Edo</option>
  <option value="Ekiti">Ekiti</option>
  <option value="Enugu">Enugu</option>
  <option value="Federal Capital Territory">Federal Capital Territory</option>
  <option value="Gombe">Gombe</option>
  <option value="Imo">Imo</option>
  <option value="Jigawa">Jigawa</option>
  <option value="Kaduna">Kaduna</option>
  <option value="Kano">Kano</option>
  <option value="Katsina">Katsina</option>
  <option value="Kebbi">Kebbi</option>
  <option value="Kogi">Kogi</option>
  <option value="Kwara">Kwara</option>
  <option value="Lagos">Lagos</option>
  <option value="Nasarawa">Nasarawa</option>
  <option value="Niger">Niger</option>
  <option value="Ogun">Ogun</option>
  <option value="Ondo">Ondo</option>
  <option value="Osun">Osun</option>
  <option value="Oyo">Oyo</option>
  <option value="Plateau">Plateau</option>
  <option value="Rivers">Rivers</option>
  <option value="Sokoto">Sokoto</option>
  <option value="Taraba">Taraba</option>
  <option value="Yobe">Yobe</option>
  <option value="Zamfara">Zamfara</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">Applicants income</h3>
              <Field
                type="text"
                name="applicants_income"
                required
                placeholder=">25,000.00"
                inputMode="numeric"
                pattern="[0-9]+(,[0-9]{3})*(\.[0-9]{2})?"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Co-applicants income</h3>
              <Field
                type="text"
                name="co_applicants_income"
                required
                placeholder=">25,000.00"
                inputMode="numeric"
                pattern="[0-9]+(,[0-9]{3})*(\.[0-9]{2})?"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Credit history</h3>
              <Field
                as="select"
                type="text"
                id="credit_history"
                name="credit_history"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="option1">0</option>
                <option value="option2">1</option>
                <option value="option3">2</option>
                <option value="option4">3</option>
                <option value="option5">4</option>
                <option value="option6">5</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">Property area</h3>
              <Field
                as="select"
                type="text"
                id="property_area"
                name="property_area"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="option1">Rural</option>
                <option value="option2">Urban</option>
              </Field>
            </div>
          </div>

          <button type="submit" className="default-submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Bvn;



/*const Bvn = () => {
  const [bvn, setBvn] = useState('');
  const [bvnError, setBvnError] = useState('');
  const navigate = useNavigate();

  const handleBvnChange = (event) => {
    const { value } = event.target;
    setBvn(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate BVN
    if (bvn.length !== 11) {
      setBvnError('BVN must be 11 digits long.');
      return;
    }

    
    // Navigate to the next page
      navigate('/loandefault');
  };

  return (
    <div>
      <h1 className="bvn-header">Applications</h1>
      <p className="bvn-header">View All Loan application</p>
      <form className="bvn-container" onSubmit={handleSubmit}>
        <h3>Use BVN</h3>
        <br></br>
        <p>Applicants BVN</p>
        <input
          type="text"
          name="bvn"
          required
          className="input-field"
          placeholder="2380111111111111"
          inputMode="numeric"
          pattern="[0-9]*"
          value={bvn}
          onChange={handleBvnChange}
        />
        {bvnError && <p className="error-message">{bvnError}</p>}
        <br/><br/>
        <button type="submit" className="submit-button"> Next <span>&#8594;</span></button>
      </form>

      <form className="bvn-container" onSubmit={handleSubmit}>
        <h3 className='bank-statement'>Upload Bank Statement</h3>
        <br></br>
        <p className='bank-details'>Upload Bank Details</p>
        <input
          type="file"
          name="bvn"
          required
          className="input-field file-field"
          placeholder=""
          inputMode="numeric"
          // pattern="[0-9]*"
          value={bvn}
          onChange={handleBvnChange}
        />
        <p className='upload-pdf'>Upload PDF. Check sample Here</p>

        {bvnError && <p className="error-message">{bvnError}</p>}
        <br/><br/>
        <button type="submit" className="submit-button btn-file-submit"> Next <span>&#8594;</span></button>
      </form>
    </div>
  );
}*/