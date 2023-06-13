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
  const data={
    labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets:[{
        // label:"Line 1",
        data:[25,32,30,23,20,25,38,41,36,35,37,28],
        borderColor:"red",
        tension:0.2,
        pointRadius:0

    },
    {
        // label:"Line 2",
        data:[15,18,20,25,40,41,43,45,46,36,35,25],
        borderColor:"green",
        tension:0.2,
        pointRadius:0

    }
]
}
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
            callback: (value) =>  value + 'k',
            // autoSkipPadding:0,
          maxTicksLimit: 5,
        },
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


