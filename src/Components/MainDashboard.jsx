import React from 'react';

// import '../Styles/maindashboard.css'

function MainDashboard() {
  return (
    <div className='dashboard-content'>
        <p>Dashboard</p>
        <div className='notification'>
            <div>
                <h2>Hello Gbenga</h2>
                <p>Welcome back you have <strong> 13 </strong> New Notification</p>
            </div>
            <div>
                <button>Existing</button>
                <button>New</button>
            </div>
        </div>
        <div className='dash-top'>
            <div>
                <p>Approved Loan</p>
                <p><strong>104</strong></p>
                <p>+10 from Yesterday   <button>Approved</button> </p>

            </div>
            <div>

            <div>
                <p>Pending Reviews</p>
                <p><strong>81</strong></p>
                <p>+2 from Yesterday   <button>Pending</button> </p>

            </div>
            
            <div>
                <p>Approved Loan</p>
                <p><strong>20</strong></p>
                <p>+1 from Yesterday   <button>Rejected</button> </p>

            </div>

            </div>


        </div>

    </div>
  )
}

export default MainDashboard