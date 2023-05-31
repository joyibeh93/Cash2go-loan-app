import React from 'react'
import cash2goLogo from '../assets/Cash2go_logo.svg';
import brandName from '../assets/Cash2go_logo2.svg';

function DashboardLogo() {
  return (
    <div className="dashboard-logo">
      <img src={cash2goLogo} alt="cash2gologo" className='img nav-logo' />
      <img src={brandName} alt="brandname" className='img' />
    </div>
  )
}

export default DashboardLogo