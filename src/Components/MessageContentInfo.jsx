import React from "react";
import doubleClickRed from "../assets/doubleClickRed.png";
import shareArrow from "../assets/shareArrow.jpg";
import msg1 from "../assets/msg1.jpg";
import msg2 from "../assets/msg2.jpg";
import msg3 from "../assets/msg3.jpg";
import msg4 from "../assets/msg4.jpg";

const MessageContentInfo = () => {
  return (
    <div className="messages">
      <div className="message">
        <input type="checkbox" name="select" />
        <img src={msg1} alt="profil-pic" />
        <div className="messageDiv">
          <p className="name">Ogbeni Mallam</p>
          <p className="text">
            Hi Gbenga Stutern, I want to make enquiry of long term business
            loan. What are the things to consider for to get a good credit
            score...
          </p>
        </div>
        <div className="msg-icons">
          <img src={doubleClickRed} alt="selected" />
          <img src={shareArrow} alt="share" />
        </div>
      </div>
      <div className="lineDiv"></div>
      <div className="message">
        <input type="checkbox" name="select" />
        <img src={msg2} alt="profil-pic" />
        <div className="messageDiv">
          <p className="name">Mary Analyst</p>
          <p className="text">
            Hi, I am Mary, risk analayst in Company AA. I would like to invite
            for a hangout tagged “Analysing the fun” held at Bamboo kitchen
            on...
          </p>
        </div>
        <div className="msg-icons">
          <img src={doubleClickRed} alt="selected" />
          <img src={shareArrow} alt="share" />
        </div>
      </div>
      <div className="lineDiv"></div>
      <div className="message">
        <input type="checkbox" name="select" />
        <img src={msg3} alt="profil-pic" />
        <div className="messageDiv">
          <p className="name">Muktar Bello</p>
          <p className="text">
            Hi Gbenga, I received your last message with thanks. I am working to
            enable a good credit score, hope to work with on the...
          </p>
        </div>
        <div className="msg-icons">
          <img src={doubleClickRed} alt="selected" />
          <img src={shareArrow} alt="share" />
        </div>
      </div>
      <div className="lineDiv"></div>
      <div className="message">
        <input type="checkbox" name="select" />
        <img src={msg4} alt="profil-pic" />
        <div className="messageDiv">
          <p className="name">Niyi Analyst</p>
          <p className="text">
            Hi Gbenga, the risk analyst course is already available at AZ
            University. Don’t forget to register on time, deadline is on
          </p>
        </div>
        <div className="msg-icons">
          <img src={doubleClickRed} alt="selected" />
          <img src={shareArrow} alt="share" />
        </div>
      </div>
      <div className="lineDiv"></div>
    </div>
  );
};

export default MessageContentInfo;
