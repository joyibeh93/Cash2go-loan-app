import React from 'react';
<<<<<<< HEAD
import '../Styles/Dashboard.css';
=======
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import '../dashboard.css'

>>>>>>> dev1

const Dashboard = () => {
  return (

    <div className="dashboard-container">
<<<<<<< HEAD
      <div className="left-sidebar"></div>
      <div className="main-dashboard">
        <div className="top-bar">
          <h1>home</h1>
        </div>
        <div className="content-container"></div>
      </div>
=======
      <div className="left-sidebar">
       <Sidebar/>
      </div>
      <div className='nav-bar'>
        <Navbar/>
      </div> 
      <div className="main-dashboard"></div>
>>>>>>> dev1
    </div>
  );
};

export default Dashboard;
