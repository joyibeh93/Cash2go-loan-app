import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar'
import Chart from '../Components/Chart';
import PieChart from '../Components/PieChart';
import PreviousApp from '../Components/PreviousApp';
const ApplicantDetails = () => {
  return (
      <div>
         <Sidebar />
         <Navbar /> 
         <div className='chart'>
         <PieChart/>
         <Chart/>
         </div>
         <PreviousApp/>
      </div>
  )
}

export default ApplicantDetails
