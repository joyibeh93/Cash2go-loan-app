import React from 'react'
import Toggle from './Toggle'
import "../Styles/settings.css"

const Notifications2 = () => {
  return (
    <div>
{/*         <div className='heady'>
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
    </div>   */}
    <div> 
        <table>
            <thead>
                <tr>
                <th style={{ borderBottom: '1px solid #b9bdc2' }}>Notification</th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              In-app Notification
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              e-mail Notification 
            </th> 
                </tr>
            </thead>
            <tbody>
                <tr>
               <td>New Application</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
                </tr>
                <tr>
               <td>New Loan Status</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
                </tr>
                <tr>
               <td>Loan Due Date</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
                </tr>
                <tr>
               <td>Loan Repayment date</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Notifications2
