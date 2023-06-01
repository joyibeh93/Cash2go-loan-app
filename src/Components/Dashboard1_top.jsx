import React from 'react'

const Dashboard1_top = () => {
  return (
    <div className='dashbord1-top'>
      <p>Link &gt Link </p>
      <div className='container1'>
        <div className='welcomediv'>
          <h3>Hello Gbenga</h3>
          <p>Welcome back to your all in dashboard</p>
        </div>
        <div className='buttondiv'>
          <button className='existing'>Existing</button>
          <button className='new'>New</button>
        </div>
      </div>
      <div className='container2'>
        <article className='status-bar'>
          <div className='status'>
            
          </div>
        </article>
        <div className='linediv'></div>
        <article className='status-bar'></article>
        <div className='linediv'></div>
        <article className='status-bar'></article>
      </div>
    </div>
  )
}

export default Dashboard1_top