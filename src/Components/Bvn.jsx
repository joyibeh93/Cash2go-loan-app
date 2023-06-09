import React, { useState } from 'react'
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
        <h3>Upload Bank Statement</h3>
        <br></br>
        <p>Upload Bank Details</p>
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
        <p>Upload PDF. Check sample Here</p>

        {bvnError && <p className="error-message">{bvnError}</p>}
        <br/><br/>
        <button type="submit" className="submit-button"> Next <span>&#8594;</span></button>
      </form>
    </div>
  );
}

export default Bvn;
