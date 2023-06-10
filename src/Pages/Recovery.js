import React from 'react'
import Download from '../assets/Download.svg';
import userIcon from '../assets/user-icon.svg';
// import { Link } from "react-router-dom"
// import MoreInfo from "./MoreInfo"
import '../Styles/Recovery.css';

const data = [
    { applicants: 'Ogbeni Malani', dateDue: '02 / 04 / 23', progress: 'Approved', creditScore: '810', totalAmount: 'N 35,000.00', amountLeft: 'N 2,000.00' },
    { applicants: 'Muktar Bello', dateDue: '02 / 04 / 23', progress: 'Approved', creditScore: '205', totalAmount: 'N 102,000.00', amountLeft: 'N 20,000.00' },
    { applicants: 'Rukayat Stutern', dateDue: '01 / 04 / 23', progress: 'Rejected', creditScore: '332', totalAmount: 'N 72,000.00', amountLeft: 'N 70,000.00' },
    { applicants: 'oloyuyomi Stutern', dateDue: '01 / 04 / 23', progress: 'Rejected', creditScore: '790', totalAmount: 'N 50,000.00', amountLeft: 'N 10,000.00' },
    { applicants: 'Ekere Stutern', dateDue: '01 / 04 / 23', progress: 'Pending', creditScore: '650', totalAmount: 'N 50,000.00', amountLeft: 'N 1,000.00' },
    { applicants: 'Ebube Stutern', dateDue: '30 / 03 / 23', progress: 'Pending', creditScore: '402', totalAmount: 'N 50,000.00', amountLeft: 'N 5,000.00' },
    { applicants: 'Ekere Stutern', dateDue: '30 / 03 / 23', progress: 'Pending', creditScore: '308', totalAmount: 'N 60,000.00', amountLeft: 'N 6,000.00' },
    { applicants: 'Ekere Stutern', dateDue: '30 / 03 / 23', progress: 'Pending', creditScore: '670', totalAmount: 'N 30,000.00', amountLeft: 'N 3,000.00' },
    { dots: '...' }
]

const Recovery = () => {

    return (

        <div>
            <p>Notifications</p>

            <div className='recovery'>
                <h3>Recovery</h3>
                <p>Settings</p> <span>Edit</span>
            </div>
            <div className='loanSort'>
                <p id='loan'>Loan Repayment</p>
                <p id='sortBy'>Sorted by date</p>
            </div>
            <br /><br />
            <div className="recoveryTable">
                <table>
                    <thead>
                        <tr className="tablehead">
                            <th className='applicant'>Applicants</th>
                            <th>Date Due<span>
                                <img src={Download} alt='Download' />
                            </span></th>
                            <th>Progress <span>
                                <img src={Download} alt='Download' />
                            </span></th>
                            <th>Credit Score <span>
                                <img src={Download} alt='Download' />
                            </span></th>
                            <th>Total Amount <span>
                                <img src={Download} alt='Download' />
                            </span></th>
                            <th>Amount Left <span>
                                <img src={Download} alt='Download' />
                            </span></th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((val, key) => {
                            return (
                                <>
                                    <tr key={key}   >
                                        <div ><td className='user'> <div className="userIcon">
                                            <img src={userIcon} alt='user-icon' />
                                        </div>
                                            <div className="userName">
                                                <p>{val.applicants}</p>

                                                {/* <Link to="/MoreInfo"> More info </Link> */}
                                                <span>more info</span></div>
                                        </td></div>
                                        <td>{val.dateDue}</td>
                                        <td>{val.progress}</td>
                                        <td>{val.creditScore}</td>
                                        <td>{val.totalAmount} </td>
                                        <td>{val.amountLeft} {val.dots}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                    <th className="footer" ><button>  Prev</button> <button>1</button><button>2</button> <button>_</button>
                        <button>5</button><button>6</button><button>Next</button>
                    </th>
                </table>
            </div>

        </div>

    )
}

export default Recovery