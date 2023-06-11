import React from 'react';
import '../Styles/Dashboard-down.css';
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import { Link } from "react-router-dom"
//import MoreInfo from "./MoreInfo"
// import pendingTransparent from '../assets/pending-transparent.svg';
// const data = [
//   {
//     product: 'Ogbeni Malani',
//     date: '02 / 04 / 23',
//     status: 'Approved',
//     creditScore: '810',
//     amount: 'N 35,000.00',
//   },
//   {
//     product: 'Muktar Bello',
//     date: '02 / 04 / 23',
//     status: 'Approved',
//     creditScore: '205',
//     amount: 'N 102,000.00',
//   },
//   {
//     product: 'Rukayat Stutern',
//     date: '01 / 04 / 23',
//     status: 'Rejected',
//     creditScore: '332',
//     amount: 'N 40,000.00',
//   },
//   {
//     product: 'oloyuyomi Stutern',
//     date: '01 / 04 / 23',
//     status: 'Rejected',
//     creditScore: '790',
//     amount: 'N 50,000.00',
//   },
//   {
//     product: 'Ekere Stutern',
//     date: '01 / 04 / 23',
//     status: 'Pending',
//     creditScore: '650',
//     amount: 'N 50,000.00',
//   },
// ];

const DashBoard1_Down = () => {
  return (
    <div className="dashBoardTable">
      <div className="tablehead">
        <div>
          <h3>All Applications</h3>
          <span>Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>
              Date <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Status <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Credit Score <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Amount <img src={downArrow} alt="" />{' '}
            </th>
            <th>Download </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Ogbeni Malani</h4>
                <Link to="/applicantinfo"> More info </Link>
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
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Muktarr Bello</h4>
                <Link to="/applicantinfo"> More info </Link>
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
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Rukayat stute</h4>
                <Link to="/applicantinfo"> More info </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={rejectedTransparent} alt="" /> Rejected
              </p>
            </td>
            <td>330</td>
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Ogbeni Malani</h4>
                <Link to="/applicantinfo"> More info </Link>
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
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard1_Down;
