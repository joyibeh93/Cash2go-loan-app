import React from 'react'
import '../Styles/chart.css'
import approvedTransparent from '../assets/approved-transparent.svg';
import RightArrow from '../assets/Right-arrow.svg'
import { Link } from 'react-router-dom';
import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'


ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);
const PieChart = () => {
  const data = {
    label:[],
    datasets: [{
      label: 'credit score',
      data: [0 - 719, 720 - 1000],
      backgroundColor: ['#249c56', 'white'],
      borderColor: ['white', 'white'],
    
    }]
  }
  const options = {

  }
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx} = chart;


      ctx.save();
      ctx.font = ' bolder 10px sans-serif';
      ctx.fillStyle = 'green';
      ctx.textAlign='center'
      
      ctx.textBaseLine= 'middle'
      ctx.fillText('720 ', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
      ctx.font = '8px';
      ctx.paddingBottom= '200px'
      ctx.fillStyle = 'grey';
      ctx.textAlign='center'
      ctx.textBaseLine= 'middle'

      ctx.save();
      ctx.font = ' bolder 10px sans-serif';
      ctx.fillStyle = 'green';
      ctx.textAlign='center'
      ctx.paddingBottom= '50px'
      ctx.fillText(' credit score', chart.getDatasetMeta(0.).data[0].x, chart.getDatasetMeta(0).data[0].y)
      ctx.textAlign='center'
      ctx.textBaseLine= 'middle'
    }
  }

  return (
    <div>
      <div className="container">
    <div className='pie'>
      <h4>Credit Score</h4>
      <h6>FICO Model</h6>
      <hr />
      <div classname='doughnut'>
        <Doughnut

          data={data}
          options={options}
          plugins={[textCenter]}
        >

        </Doughnut>
        <p>(720 - 850)
          <button className="approved">
            {' '}
            <img src={approvedTransparent} alt="approved-icon" /> Excellent
          </button></p>
        <hr />
        <div className='Model'>
        <p>Change Model </p>
        <Link className='link'> More <img src={RightArrow} alt="right-arrow" /></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PieChart
