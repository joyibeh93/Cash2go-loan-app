import React from "react";
import MsgForm from "../Components/MsgForm";

const NewMessage = () => {
  return (
    <div className=".messageContent">
      <div className="msg-top-bar">
        <div>
          <p className="msg-cnt-mb">
            Message <span>&gt;</span> Inbox
          </p>
          <h1>Messages</h1>
        </div>
        <div className="exit-new">
          <button className="markAll">Mark All</button>
          <button className="markRead">Mark All as Read</button>
        </div>
      </div>
      <div className="msg-nav">
        <div className="msg-section">
          <p>Inbox</p>
          <div className="msg-line selected"></div>
        </div>
        <div className="msg-section">
          <p>New</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section">
          <p>Sent</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section">
          <p>Thread</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section">
          <p>Trash</p>
          <div className="msg-line"></div>
        </div>
      </div>
      <div className="Msg-inbox">
        <div className="msg-cnt-note">
          <div>
            <h4>Inbox</h4>
            <p> Sorted by Date</p>
          </div>
          <p className="msg-cnt-dot">...</p>
        </div>
        <div className="lineDivTop"></div>
      </div>
      <MsgForm/>
    </div>
  );
};

export default NewMessage;
