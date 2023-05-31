import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import '../dashboard.css'


const Dashboard = () => {
  return (

    <div className="dashboard-container">
      <div className="left-sidebar">
       <Sidebar/>
      </div>
      <div className='nav-bar'>
        <Navbar/>
      </div> 
      <div className="main-dashboard"></div>
    </div>
  );
};

export default Dashboard;
