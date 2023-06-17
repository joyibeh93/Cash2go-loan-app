import React from 'react';
import '../Styles/Dashboard-down.css';
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import pendingTransparent from '../assets/pending-transparent.svg';
import { Link } from "react-router-dom"


const DashBoard1_Down = () => {
  return (
    <div className="dashDown-Table">
      <div className="dashDown-tablehead">
        <div style={{ paddingBottom: '15px' }} >
          <h3 className='dashDown-h3'>All Applications</h3>
          <span >Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" style={{ paddingRight: '15px' }} />
      </div>
      <table>
        <thead>
          <tr >
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>Product</th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Date <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Status <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Credit Score <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Amount <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="dashDown-data-title"  >
                <h4>Ogbeni Malani</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px' }}> More info </Link>
                {/* <span>more info</span> */}
              </div>
            </td >
            <td style={{ borderBottom: '1px solid #b9bdc2' }}>02 / 04 / 23</td>
            <td>
              <p className="dashDown-approved">
                <img src={approvedTransparent} alt="" style={{ marginRight: '5px' }} /> Approved
              </p>
            </td>
            <td>810</td>
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="" className='dashDown-img' />
            </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Muktarr Bello</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px' }}> More info </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt="" style={{ marginRight: '5px' }} /> Rejected </p>
            </td>
            <td>205</td>
            <td>N 102,000.00</td>
            <td>
              <img className='dashDown-img' src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Ekere Stutern</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px' }}> More info </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt="" style={{ marginRight: '5px' }} /> Rejected
              </p>
            </td>
            <td>205</td>
            <td>N 102,000.00</td>
            <td>
              <img src={download} alt="" className='dashDown-img' />
            </td>
          </tr>

          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Rukayat stute</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px' }}> More info </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-approved">
                <img src={approvedTransparent} alt="" style={{ marginRight: '5px' }} /> Approved
              </p>
            </td>
            <td>330</td>
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="" className='dashDown-img' />
            </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Ogbeni Malani</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px' }}> More info </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p style={{ color: 'black', fontSize: '14.1px' }} className="dashDown-pending">
                <img src={pendingTransparent} alt="" style={{ marginRight: '5px' }} />  Pending
              </p>
            </td>
            <td>332</td>
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="" className='dashDown-img' />
            </td>
          </tr>
          <tr >
            <th className="dashDown-footer"  >
              <button className='dashDown-foot1' > Prev </button>
              <button className='dashDown-foot2'   >1</button>
              <button className='dashDown-foot2'   >2</button>
              <button className='dashDown-foot2'  >_</button>
              <button className='dashDown-foot2'  >5</button>
              <button className='dashDown-foot2'  >6</button>
              <button className='dashDown-foot3'  >Next</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard1_Down;
