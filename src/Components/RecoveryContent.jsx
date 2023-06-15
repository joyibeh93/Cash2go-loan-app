import React from 'react';
// import '../Styles/Dashboard-down.css';
//import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
//import { Link } from "react-router-dom"
import '../Styles/Recovery.css'
import { Link } from 'react-router-dom';

const DashBoard1_Down = () => {
  return (
    <div>
         <div className="dashboard-content">
            <p>Notification</p>
            <div className="notification">
                <div>
                <h2>Recovery</h2>
                
                </div>
                <div className="exit-new">
                <button className="exisiting recoverybtn">Settings</button>
                <button className="new reoveryEdit">Edit</button>
                </div>
            </div>
        </div>
        <div className="tablehead recooveryTablHead2">
            <div>
                <h3 className='recovery-tablhead'>All Applications</h3>
                <span>Sorted by Date</span>
            </div>
      </div>
    <div className="dashBoardTable">
     
      <table>
        <thead>
          <tr>
            <th>Applicants</th>
            <th>
              Date Due <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Progress <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Credit Score <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Total Amount <img src={downArrow} alt="" />{' '}
            </th>
            <th>Amount Left <img src={downArrow} alt="" />{' '}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <Link to='/applicantinfo'><h4>Ogbeni Malani</h4></Link>
                <p className='recoveryID'> ID202390112 </p>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>810</td>
            <td>N 35,000.00</td>
            <td>N 2,000.00</td>
            <td>
            <p className="msg-cnt-dot">...</p>
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Muktarr Bello</h4>
                <p className='recoveryID'> ID202390112 </p>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>205</td>
            <td>N 102,000.00</td>
            <td>N 20,000.00</td>
            <td>
            <p className="msg-cnt-dot">...</p>
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Rukayat stute</h4>
                <p className='recoveryID'> ID202390112 </p>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down rejected">
                <img src={rejectedTransparent} alt="" /> Rejected
              </p>
            </td>
            <td>330</td>
            <td>N 72,000.00</td>
            <td>N 70,000.00</td>
            <td>
            <p className="msg-cnt-dot">...</p>
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Ogbeni Malani</h4>
                <p className='recoveryID'> ID202390112 </p>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>332</td>
            <td>N 50,000.00</td>
            <td>N 10,000.00</td>
            <td>
            <p className="msg-cnt-dot">...</p>
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Ogbeni Malani</h4>
                <p className='recoveryID'> ID202390112 </p>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>810</td>
            <td>N 35,000.00</td>
            <td>N 2,000.00</td>
            <td>
            <p className="msg-cnt-dot">...</p>
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Muktarr Bello</h4>
                <p className='recoveryID'> ID202390112 </p>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>205</td>
            <td>N 102,000.00</td>
            <td>N 20,000.00</td>
            <td>
            <p className="msg-cnt-dot">...</p>
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Rukayat stute</h4>
                <p className='recoveryID'> ID202390112 </p>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down rejected">
                <img src={rejectedTransparent} alt="" /> Rejected
              </p>
            </td>
            <td>330</td>
            <td>N 72,000.00</td>
            <td>N 70,000.00</td>
            <td>
            <p className="msg-cnt-dot">...</p>
            </td>
          </tr>checkout 
          
        </tbody>
      </table>
    </div>

    </div>
    
  );
};

export default DashBoard1_Down;