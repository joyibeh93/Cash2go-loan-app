import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJs.register(
  Title,
  Tooltip,
  CategoryScale,
  LineElement,
  Legend,
  LinearScale,
  PointElement
);

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Data in peson range",
        data: [20, 19.5, 19, 18, 21, 19, 17, 18, 17, 15,13,11 ],
        backgroundColor: "#454e5c",
        borderColor: "grey",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension:0.4,
        fill:true,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min:10,
        max:50,
        ticks: {
            stepSize:2,
          maxTicksLimit: 5,
          callback: (value) =>  value + 'k'
            
        },
        grid:{
            borderDash:[10]
        }
      },
    },
  };

  return (
    <div className="Line-chart">
      <div>
        <h4>Income vs Expenditure</h4>
        <p>Jan-May 2023</p>
      </div>
      <hr />
      <div style={{ width: "600px", height: "300px" }}>
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChart;


