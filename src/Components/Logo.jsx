import React from 'react';
import cash2goLogo from '../assets/Cash2go_logo.svg';
import brandName from '../assets/Cash2go_logo2.svg';

const Logo = () => {
  return (
    <div className="logo dashboard-logo">
      <img src={cash2goLogo} alt="cash2gologo" />
      <img src={brandName} alt="brandname" />
    </div>
  );
};

export default Logo;
