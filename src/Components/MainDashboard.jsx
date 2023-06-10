import React from 'react';
import '../Styles/Dashboard1-top.css';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import pendingTransparent from '../assets/pending-transparent.svg';
import approvedBlack from '../assets/approvedblack.svg';
import pendingBlack from '../assets/pendingblack.svg';
import rejectedBlack from '../assets/rejectedblack.svg';
import { useNavigate } from 'react-router-dom';

//function MainDashboard() {
  const MainDashboard = () => {
    const navigate = useNavigate();
    const handleNewButtonClick = () => {
      navigate("/bvn");
    };

  return (
    <div className="dashboard-content">
      <p>Dashboard</p>
      <div className="notification">
        <div>
          <h2>Hello Gbenga</h2>
          <p>
            Welcome back you have <span> 13 </span> New Notification
          </p>
        </div>
        <div className="exit-new">
          <button className="exisiting">Existing</button>
          <button className="new" onClick={handleNewButtonClick}>New</button>
        </div>
      </div>
      <div className="dash-top">
        <div className='dast-top1'>
          <p>Approved Loan</p>
          <p className="loan-count">
            <strong>104</strong>
          </p>
          <p className="loan-stats">
            +10 from Yesterday{' '}
            <button className="approved">
              {' '}
              <img src={approvedTransparent} alt="approved-icon" /> Approved
            </button>
          </p>
        </div>
        <img src={approvedBlack} className="approved-black" alt="" />
        <div className='dast-top1'>
          <p>Pending Reviews</p>
          <p className="loan-count">
            <strong>81</strong>
          </p>
          <p className="loan-stats">
            +2 from Yesterday{' '}
            <button className="pending">
              <img src={pendingTransparent} alt="pending-icon" /> Pending
            </button>
          </p>
        </div>
        <img src={pendingBlack} className="pending-black" alt="" />
        <div className='dast-top1'>
          <p>Approved Loan</p>
          <p className="loan-count">
            <strong>20</strong>
          </p>
          <p className="loan-stats">
            +1 from Yesterday{' '}
            <button className="rejected">
              <img src={rejectedTransparent} alt="rejected-icon" /> Rejected
            </button>
          </p>
        </div>
        <img src={rejectedBlack} className="rejected-black" alt="" />
      </div>
    </div>
  );
}

export default MainDashboard;
