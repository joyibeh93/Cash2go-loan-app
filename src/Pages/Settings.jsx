import React from 'react'
import Models from '../Components/Models'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
const Settings = () => {
  return (
    <div>
       <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar />
        </div>
        <div className="content-container">
        <Models/> 
        </div>
      </div>
    </div>  
    
     </div>
  )
}

export default Settings
