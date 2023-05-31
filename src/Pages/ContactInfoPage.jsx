import React from 'react';
import ContactInfo from '../Components/ContactInfo';

const ContactInfoPage = () => {
  return (
    <div className="dashboard-container">
      <div className="left-sidebar"></div>
      <div className="main-dashboard">
        <div className="top-bar">
          <h1>home</h1>
        </div>
        <div className="content-container"></div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactInfoPage;
