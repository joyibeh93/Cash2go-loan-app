import React from "react";

const message = () => {
  return (
    <div className="messageContainer">
      {/* Top bar */}
      <div className="topBar">
        <p>
          Messages <span>&gt;</span>
        </p>
        <div className="titleAndSettings">
          <h2>Messages</h2>
          <div className="buttonDiv">
            <button>Settings</button>
            <button>Mark all as read</button>
          </div>
        </div>
      </div>

      {/* Notification Bar */}
      <div className="notifications">
        <div className="notificationsDiv">
          <p>All Notifications</p>
          <p>Sorted by Date</p>
        </div>
        <img src="" alt="" />
      </div>
      <div className="lineDiv"></div>

      {/* {Messages} */}
      <div className="messages">
        <div className="message">
          <div className="messageDiv">
            <p className="name">Ogbeni Mallam</p>
            <p className="text">
              Hi Gbenga Stutern, I want to make enquiry of long term business
              loan. What are the things to consider for to get a good credit
              score...
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="lineDiv"></div>
        <div className="message">
          <div className="messageDiv">
            <p className="name">Mary Analyst</p>
            <p className="text">
              Hi, I am Mary, risk analayst in Company AA. I would like to invite
              for a hangout tagged “Analysing the fun” held at Bamboo kitchen
              on...
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="lineDiv"></div>
        <div className="message">
          <div className="messageDiv">
            <p className="name">Muktar Bello</p>
            <p className="text">
              Hi Gbenga, I received your last message with thanks. I am working
              to enable a good credit score, hope to work with on the...
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="lineDiv"></div>
        <div className="message">
          <div className="messageDiv">
            <p className="name">Niyi Analyst</p>
            <p className="text">
              Hi Gbenga, the risk analyst course is already available at AZ
              University. Don’t forget to register on time, deadline is on
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="lineDiv"></div>
        <div className="message">
          <div className="messageDiv">
            <p className="name">Bukola Adepoju</p>
            <p className="text">
              Hi Gbenga, can I know why my application was rejected
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="lineDiv"></div>
      </div>

    {/* {Go-to} */}
    <div className="goTo">
        <button><span>&larr;</span>Prev</button>
        <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button><img src="" alt="" /></button>
            <button>5</button>
            <button>6</button>
        </div>
        <button><span>&rarr;</span>Next</button>
    </div>
    </div>
  );
};

export default message;
