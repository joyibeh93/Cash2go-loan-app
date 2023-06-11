import React from "react";
import { useState } from "react";
import Barchart from "../Components/Barchart";
import PieChart2 from "../Components/PieChart2";
import LineChart from "../Components/LineChart";

const Analytics = () => {
    const chartData = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823,
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345,
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555,
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555,
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234,
        },
      ];

  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: chartData.map((data) => data.userGain),
        backgroundColor: '#fd3d39',
        borderColor: "black",
      },
    ],
  });
  
  const [userChart, setUserChart] = useState({
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: chartData.map((data) => data.userLost),
        backgroundColor: '#00beb2',
        borderColor: "black",
      },
    ],
  });

  return <div>
    <div className="line-chart">
        <LineChart linedata={[userData, userChart]}/>
    </div>
    <div className="pie-and-bar"></div>
  </div>;
};

export default Analytics;
