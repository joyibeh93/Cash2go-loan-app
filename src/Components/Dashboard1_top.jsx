import React from "react";
import approvedTransparent from "../assets/approved-transparent.svg";
import approvedBlack from "../assets/approved-transparent.svg";

const Dashboard1_top = () => {
  return (
    <>
    {/* 1st section */}
    <div className="dashbord1-top">
      <p>Link &gt Link </p>
      <div className="container1">
        <div className="welcomediv">
          <h3>Hello Gbenga</h3>
          <p>Welcome back to your all in dashboard</p>
        </div>
        <div className="buttondiv">
          <button className="existing">Existing</button>
          <button className="new">New</button>
        </div>
      </div>

      {/* 2nd section */}
      <div className="container2">
        <article className="status-bar1">
          <div className="status">
            <p>Approved Loans</p>
            {approvedBlack}
          </div>
          <p className="statusNum">104</p>
          <div className="status-bar2">
            <p>+10 from yesterday</p>
            <div className="labelDiv">
              {approvedTransparent}
              <p>Label</p>
            </div>
          </div>
        </article>
        <div className="linediv"></div>
        <article className="status-bar">
          <div className="status">
            <p>Pending Reviews</p>
            {approvedBlack}
          </div>
          <p className="statusNum">81</p>
          <div className="status-bar2">
            <p>+2 from yesterday</p>
            <div className="labelDiv">
              {approvedTransparent}
              <p>Label</p>
            </div>
          </div>
        </article>
        <div className="linediv"></div>
        <article className="status-bar">
          <div className="status">
            <p>Rejected</p>
            {approvedBlack}
          </div>
          <p className="statusNum">20</p>
          <div className="status-bar2">
            <p>+1 from yesterday</p>
            <div className="labelDiv">
              {approvedTransparent}
              <p>Label</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    </>
  );
};

export default Dashboard1_top;
