import React from 'react';
// import Logo from './Logo';

import "../sidebar.css";
import DashboardLogo from './DashboardLogo';


const Sidebar = () => {
  return <div className='sidebar'>
    <div className='top'>
      <span className='top-logo'>
        {/* <Logo/> */}
        <DashboardLogo/>
      </span>
    </div>
    <div className='bottom'>Buttom</div>
  </div>;
};

export default Sidebar;
