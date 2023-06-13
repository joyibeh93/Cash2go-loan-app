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
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Logo />
      </div>

      <div className="sidebar-items1">
        <Link to="/dashboard" className="links">
          <img src={Grid} alt="Dashboard-icon" />
          <p>Dashboard</p>
        </Link>
        <Link to="/application" className="links">
          <img src={Applications} alt="Application-icon" />
          <p>Applications</p>
        </Link>
        <Link to="/analytics" className="links">
          <img src={Analytics} alt="Dashboard-icon" />
          <p>Analytics</p>
        </Link>
        <Link to="/recovery" className="links">
          <img src={Recovery} alt="Dashboard-icon" />
          <p>Recovery</p>
          <p className='p-red'>
            <span className='one'>1</span>
          </p>
        </Link>
        <Link to="/message" className="links">
          <img src={Message} alt="Dashboard-icon" />
          <p>Messages</p>
          <p className='p-green'>
            <span className='one1'>1</span>
          </p>
          

        </Link>
      </div>
      <div className="sidebar-items2">
        <Link to="" className="links">
          <img src={Resources} alt="Dashboard-icon" />
          <p>Resources</p>
        </Link>
        <Link to="/settings" className="links">
          <img src={Settings} alt="Dashboard-icon" />
          <p>Settings</p>
        </Link>
        <Link to="" className="links">
          <img src={HelpCenter} alt="Dashboard-icon" />
          <p>Help Center</p>
        </Link>
        <div className='logout-div'>
           <Link to="/login" className="log-out">Log out</Link>
        </div>
      </div>
      <div className='logout-div'>
           <Link to="/login" className="log-out">Log out</Link>
      </div>
      

      
    </div>
  );
};

export default Sidebar;
