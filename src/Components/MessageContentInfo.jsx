import React from "react";
import "../Styles/MessageContentInfo.css";
import doubleClickRed from "../assets/doubleClickRed.png";
import shareArrow from "../assets/shareArrow.jpg";
import msg1 from "../assets/msg1.jpg";
import msg2 from "../assets/msg2.jpg";
import msg3 from "../assets/msg3.jpg";
import msg4 from "../assets/msg4.jpg";

const MessageContentInfo = () => {
  return (
    <div className="Msg-inbox">
      <div className="msg-cnt-note">
        <div>
          <h4>Inbox</h4>
          <p> Sorted by Date</p>
        </div>
        <p className="msg-cnt-dot">...</p>
      </div>
      <div className="lineDivTop"></div>
      <div className="messages">
        <div className="message">
          <input type="checkbox" name="select" className="msgcntinfo" />
          <img src={msg1} alt="profil-pic" className="profile" />
          <div className="messageDiv">
            <p className="name">Ogbeni Mallam</p>
            <p className="text">
              Hi Gbenga Stutern, I want to make enquiry of long term business
              loan. What are the things to consider for to get a good credit
              score...
            </p>
          </div>
          <div className="msg-icons">
            <img src={doubleClickRed} alt="selected" className="doubleclick" />
            <img src={shareArrow} alt="share" className="share" />
          </div>
        </div>
        <div className="lineDiv"></div>
        <div className="message">
          <input type="checkbox" name="select" className="msgcntinfo" />
          <img src={msg2} alt="profil-pic" className="profile" />
          <div className="messageDiv">
            <p className="name green">Mary Analyst</p>
            <p className="text">
              Hi, I am Mary, risk analayst in Company AA. I would like to invite
              for a hangout tagged “Analysing the fun” held at Bamboo kitchen
              on...
            </p>
          </div>
          <div className="msg-icons">
            <img src={doubleClickRed} alt="selected" className="doubleclick" />
            <img src={shareArrow} alt="share" className="share" />
          </div>
        </div>
        <div className="lineDiv"></div>
        <div className="message">
          <input type="checkbox" name="select" className="msgcntinfo" />
          <img src={msg3} alt="profil-pic" className="profile" />
          <div className="messageDiv">
            <p className="name green">Muktar Bello</p>
            <p className="text">
              Hi Gbenga, I received your last message with thanks. I am working
              to enable a good credit score, hope to work with on the...
            </p>
          </div>
          <div className="msg-icons">
            <img src={doubleClickRed} alt="selected" className="doubleclick" />
            <img src={shareArrow} alt="share" className="share" />
          </div>
        </div>
        <div className="lineDiv"></div>
        <div className="message">
          <input type="checkbox" name="select" className="msgcntinfo" />
          <img src={msg4} alt="profil-pic" className="profile" />
          <div className="messageDiv">
            <p className="name">Niyi Analyst</p>
            <p className="text">
              Hi Gbenga, the risk analyst course is already available at AZ
              University. Don't forget to register on time, deadline is on
            </p>
          </div>
          <div className="msg-icons">
            <img src={doubleClickRed} alt="selected" className="doubleclick" />
            <img src={shareArrow} alt="share" className="share" />
          </div>
        </div>
        <div className="lineDiv"></div>
      </div>
    </div>
  );
};

export default MessageContentInfo;
