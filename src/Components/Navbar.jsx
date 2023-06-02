import React from 'react';
import usericon from '../assets/user-icon.svg';
import searchicon from '../assets/Search.svg';
import rightarrow from '../assets/Right-arrow.svg';
import '../Styles/navbar.css';
import bellIcon from '../assets/Bell-iconont S';
function Navbar() {
  return (
    <div className="navbar-item">
      <img src={searchicon} alt="searhicon" className="searchicon" />
      <input type="search" placeholder="Search" className="navbar-search" />
      <img src={rightarrow} alt="right-arrow" className="right-arrow" />
      <div className="navbar-item2">
        <img src={bellIcon} alt="bell-icon" />
        <div>
          <img src={usericon} alt="user-icon" className="navbar-userIcon" />
        </div>
        <div className="name-desc">
          <p>Gbenger Stutern</p>
          <p> Loan Analytics</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
