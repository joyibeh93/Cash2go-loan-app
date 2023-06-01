import React from 'react';
import '../Styles/sidebar.css';
import Logo from './Logo';
import Grid from '../assets/ViewGrid.svg';
import Applications from '../assets/Applications.svg';
import Analytics from '../assets/Analytics.svg';
import Recovery from '../assets/Recovery.svg';
import Message from '../assets/Message.svg';
import Resources from '../assets/Resources.svg';
import Settings from '../assets/Settings.svg';
import HelpCenter from '../assets/Helpcenter.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Logo />
      </div>

      <div className="sidebar-items1">
        <div className="links">
          <img src={Grid} alt="Dashboard-icon" />
          <p>Dashboard</p>
        </div>
        <div className="links">
          <img src={Applications} alt="Application-icon" />
          <p>Applications</p>
        </div>
        <div className="links">
          <img src={Analytics} alt="Dashboard-icon" />
          <p>Analytics</p>
        </div>
        <div className="links">
          <img src={Recovery} alt="Dashboard-icon" />
          <p>Recovery</p>
        </div>
        <div className="links">
          <img src={Message} alt="Dashboard-icon" />
          <p>Messages</p>
        </div>
      </div>
      <div className="sidebar-items2">
        <div className="links">
          <img src={Resources} alt="Dashboard-icon" />
          <p>Resources</p>
        </div>
        <div className="links">
          <img src={Settings} alt="Dashboard-icon" />
          <p>Settings</p>
        </div>
        <div className="links">
          <img src={HelpCenter} alt="Dashboard-icon" />
          <p>Help Center</p>
        </div>
      </div>

      <p className="log-out">Log out</p>
    </div>
  );
};

export default Sidebar;
