import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Recovery from '../Components/Recovery';

function Application() {
  return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar />
        </div>
        <div className="content-container">
          <Recovery />
        </div>
      </div>
    </div>
  )
}
export default Application