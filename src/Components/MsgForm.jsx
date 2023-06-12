import React from "react";
import "../Styles/MsgForm.css";

const MsgForm = () => {
  return (
    <form className="newMessage">
      <div className="msg-heading">
        <div className="new-msg">
          <h2>New Message</h2>
          <p>sender@workermail.com</p>
        </div>
        <div className="email-div">
          <label htmlFor="email" className="email-label">
            To
          </label>
          <input
              type="email"
              placeholder="email@work.com"
              className="email"
            />
            <div className="ellipses1">...</div>
        </div>
      </div>
      <div className="linediv"></div>
      <div className="msg-main">
        <div className="msg-title">
          <input type="text" placeholder="Message Title Here" className="input" />
          <div className="ellipses2">...</div>
        </div>
        <div className="linediv-sm"></div>
        <label htmlFor="body" className="body">Body</label>
        <textarea cols="60" rows="10"></textarea>
        <div className="linediv"></div>
        <button className="send">Send</button>
      </div>
    </form>
  );
};

export default MsgForm;
