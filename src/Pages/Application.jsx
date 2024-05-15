// import React from 'react';
// import Sidebar from '../Components/Sidebar';
// import Navbar from '../Components/Navbar';
// import ApplicationContent from '../Components/ApplicationContent';

// function Application() {
//   return (
//     <div className="dashboard-container">
//       <div className="left-sidebar">
//         <Sidebar />
//       </div>
//       <div className="main-dashboard">
//         <div className="top-bar">
//           <Navbar />
//         </div>
//         <div className="content-container">
//         <ApplicationContent/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Application

import React, { useState, useCallback } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import ApplicationContent from '../Components/ApplicationContent';
import ApplicationData from '../Components/ApplicationData';

function Application() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(ApplicationData); // Initially, use the entire data

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilterAndSearch = useCallback(() => {
      const filtered = ApplicationData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm) ||
      item.creditScore.toString().includes(searchTerm) ||
      item.status.toLowerCase().includes(searchTerm) ||
      item.amount.toString().includes(searchTerm)
    );
    console.log('filtered',filtered)
    console.log('searchTerm',filtered)

    setFilteredData(filtered);
  }, [searchTerm]);

  React.useEffect(() => {
    applyFilterAndSearch();
  }, [applyFilterAndSearch]);

  return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>
        <div className="content-container">
          <ApplicationContent filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default Application;

