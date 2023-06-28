import React from 'react'

const Activity = () => {
  return (
     <div>
       {/* <div className='heady'>
        <h2 className='set-head'>Settings</h2>
        <div className="settings-button">
          <button className="markAll">Turn ALL OFF</button>
          <button className="markRead">Turn ALL ON</button>
          </div>
        </div>
        <div className='categories'>
      <span>Models</span>
      <span>Notification</span>
      <span>Security & privacy</span>
      <span>Activity</span>
    </div>  */}



      <div className="msg-cnt-note">
          <div>
            <h4>All Activities</h4>
            <p> Sorted by Date</p>
            </div>
        </div>
        <table>
          <thead>
            <tr>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>Time</th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}> Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01 / 04 / 23</td>
              <td><h4>Password Change</h4>
              <p>The short term loan of ogbeni Mallami Stutern (0035562) just got approved with a 70% prediction </p>
              </td>
            </tr>
            <tr>
              <td>01 / 04 / 23</td>
              <td><h4>Password Change</h4>
              <p>The short term loan of ogbeni Mallami Stutern (0035562) just got approved with a 70% prediction </p>
              </td>
            </tr>
            <tr>
              <td>01 / 04 / 23</td>
              <td><h4>Password Change</h4>
              <p>The short term loan of ogbeni Mallami Stutern (0035562) just got approved with a 70% prediction </p>
              </td>
            </tr>
            <tr>
              <td>01 / 04 / 23</td>
              <td><h4>Password Change</h4>
              <p>The short term loan of ogbeni Mallami Stutern (0035562) just got approved with a 70% prediction </p>
              </td>
            </tr>
          </tbody>
        </table>
    </div>

  )
}

export default Activity
