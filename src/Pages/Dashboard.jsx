import React from 'react';
import '../Styles/Dashboard.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar/>
        
        </div>
        <div className="content-container"></div>
      </div>
    </div>
  );
};

export default Dashboard;
