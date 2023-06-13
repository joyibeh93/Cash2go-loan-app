import React from "react";
import '../Styles/chart.css'
import RightArrow from '../assets/Right-arrow.svg'
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Chart = () => {

    const data = {
        labels: ["May 2018", "Aug 2019", "Sep 2020", "Jan 2021", "Dec 2021"],
        datasets: [
            {
                labels: ['Short-term', 'Long-term'],
                data: [50, 100, 90, 80, 40, 85],
                backgroundColor: '#454e5c',
            }],
    }

    const options = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: [{
                    grid: {
                        drawOnChartArea: false
                    },
                    border: {
                        display: false,
                    }
                }],
                y: {
                    beginAtZero: true,
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        maxTicksLimit: 4,
                        callback: ((context, index) => {
                            console.log(context)
                            let response;
                            if (context === 1) {
                                response = '10k';
                            } else if (context === 2) {
                                response = '50k';
                            } else if (context === 3) {
                                response = '100k';
                            } else {
                                response = '0';
                            }
                            return response;
                        })
                    },

                }

            }
        }
    }
    return (
        <div className="container">
            <div className="bar">
                <h3>Previous Loans </h3>
                <h6>Subtitle</h6>
                <hr />
                <h4>Maximum Loan Request</h4>
                <h3>N 92000</h3>

                <Bar data={data} options={options}></Bar>
                <hr />
                <Link> More <img src={RightArrow} alt="right-arrow" /></Link>
            </div>
        </div>

    );
};

export default Chart;