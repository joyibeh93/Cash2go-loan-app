import { ListItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react'


const data = [
    { product: 'Ogbeni Malani', date: '02 / 04 / 23', status: 'Approved', creditScore: '810', amount: 'N 35,000.00' },
    { product: 'Muktar Bello', date: '02 / 04 / 23', status: 'Approved', creditScore: '205', amount: 'N 102,000.00' },
    { product: 'Rukayat Stutern', date: '01 / 04 / 23', status: 'Rejected', creditScore: '332', amount: 'N 40,000.00' },
    { product: 'oloyuyomi Stutern', date: '01 / 04 / 23', status: 'Rejected', creditScore: '790', amount: 'N 50,000.00' },
    { product: 'Ekere Stutern', date: '01 / 04 / 23', status: 'Pending', creditScore: '650', amount: 'N 50,000.00' }

]

const DashBoard1_Down = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('https://....');
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    return (
        <div className="dashBoardTable">
            <table>
                <thead>
                    <tr>All Applications <span>
                        {/* <img src={ } alt='Download' /> */}
                    </span></tr>
                    <tr>Sorted by Date</tr>
                    <tr>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Credit Score</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>

                    {/* {data.map((item) */}
                    {data.map((val, key) => {
                        return (
                            <tr key={key}
                            // key= {item.id}   > 
                            >
                                {/* <td>{item.product}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                                <td>{item.creditScore}</td>
                                <td>{item.amount}</td> */}

                                <td>{val.product} <br /><a href=''>more info </a>
                                </td>
                                <td>{val.date}</td>
                                <td>{val.status}</td>
                                <td>{val.creditScore}</td>
                                <td>{val.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DashBoard1_Down