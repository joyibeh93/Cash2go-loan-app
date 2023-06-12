import React from 'react'
import "../Styles/settings.css"
import downArrow from '../assets/down-arrow.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import Switch from './Switch';
import Padlock from './Padlock';
import { useState } from 'react';



const Models= () => {
    const [value, setValue] = useState(false)
  return (
    <div >
        <h1>Settings</h1>
        <div className="exit-new">
          <button className="exisiting">Manage</button>
          <button className="new">Create New Model</button>
        </div>
        <span>Models</span>
        <span>Notification</span>
        <span>Security & Privacy</span>
        <span>Activity</span>
        <div className='settings'>
            <table>
            <thead className="tablehead">
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
                <img src={rejectedTransparent} alt="" /> Active
              </p>
            </td>
            <td>Default</td>
            <td>{Padlock}</td>
          </tr>
          <tr>
            <td className="first-data">
            <Switch
            isOn ={value}
            onColor="#ff6f5a"
            handleToggle={()=> setValue(!value)}/>{''}
              <div className="data-title">
                <h4>Alpha Model</h4>
                <span>Prioritize Prev loans</span>
              </div>
              <p className="rejected-down">
                <img src={rejectedTransparent} alt="" /> Inactive
              </p>
            </td>
            <td>01/04/23</td>
            <td>Admin</td>
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
                <span>Prioritize Prev loans</span>
              </div>
              <p className="rejected-down">
                <img src={rejectedTransparent} alt="" /> Inactive
              </p>
            </td>
            <td>01/04/23</td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr>
            <td className="first-data">
             <Switch
             isOn ={value}
             onColor="#EF476F"
             handleToggle={()=> setValue(!value)}/>{' '}{' '}
              <div className="data-title">
                <h4>CSI Model</h4>
                <span>Prioritize Prev loans</span>
              </div>
              <p className="rejected-down">
                <img src={rejectedTransparent} alt="" /> Inactive
              </p>
            </td>
            <td>01/04/23</td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          </tbody>
            </table>
        </div>
        
      
    </div>
  )
}

export default Models