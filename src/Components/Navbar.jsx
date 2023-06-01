import React from 'react'
import usericon from '../assets/user-icon.svg'
import '../Styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar-item'>
      <input type="search" placeholder='Search' className='navbar-search'/>
      <span className='navbar-item2'>
        <span>
          <img src={usericon} alt="user-icon" className='navbar-userIcon' />
        </span>
        <span className='name-desc'>
          <p>Gbenger Stutern</p>
          <p> Loan Analytics</p>
        </span>
      </span>
      
    </div>
  )
}

export default Navbar