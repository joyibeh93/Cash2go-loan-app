import React from 'react'
import "../Styles/settings.css"
import downArrow from '../assets/down-arrow.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import Switch from './Switch';
import Padlock from './Padlock'; 
import approvedTransparent from '../assets/approved-transparent.svg';
import { useState } from 'react';


const Models= () => {
  const [value, setValue] = useState(false)

  return (
    <div >
      <div className='heady
      '>
        <h1>Settings</h1>
        <div className="exit-new">
          <button className="markAll">Manage</button>
          <button className="markRead">Create new Model</button>
          </div>
        </div>
    <div className='categories'>
      <span>Models</span>
      <span>Notification</span>
      <span>Security & privacy</span>
      <span>Activity</span>
    </div>
        <div className='settings'>
            <table>
            <thead>
          <tr>
            <th>Model Name</th>
            <th>
              Status <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Date Created <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Created by <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Edit
            </th>
        </tr>
        </thead> 
         <tbody>
          <tr >
            <td className="first-data">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Default Model</h4>
                <span>Machine Learning AI</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-down">
                {' '}
                <img src={approvedTransparent} alt="approved-icon" />
              Active
              </p>
            </td>
            <td>Default</td>
            <td>{Padlock}</td>
          </tr>
          <tr >
            <td className="first-data">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Alpha Model</h4>
                <span>Priotize Prev.Loans</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-btn">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Admin</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr >
            <td className="first-data">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Credit First Model</h4>
                <span>Credit Score Main</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-btn">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr >
            <td className="first-data">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>CSI Model</h4>
                <span>Credit Score Only</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-btn">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr>
          <td className="first-data">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Credit First Model</h4>
                <span>Credit Score Main</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-btn">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr >
            <td className="first-data">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Default Model</h4>
                <span>Machine Learning AI</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-down">
                {' '}
                <img src={approvedTransparent} alt="approved-icon" />
              Active
              </p>
            </td>
            <td>Default</td>
            <td>{Padlock}</td>
          </tr>


          </tbody> 
            </table>
        </div>
        
      
    </div>
  )
}

export default Models