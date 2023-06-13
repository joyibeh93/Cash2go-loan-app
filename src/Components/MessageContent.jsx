/*import React from "react";
import "../Styles/MessageContent.css";
import MessageContentInfo from "./MessageContentInfo";
import { useState } from "react";
import MsgForm from "./MsgForm";
import ThreadForm from "./ThreadForm";

function MessageContent() {
  const [message, setMessage] = useState("inbox");

  return (
    <div className="messageContent">
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
        <div className="msg-section" onClick={() => setMessage("inbox")}>
          <p>Inbox</p>
          <div className="msg-line selected"></div>
        </div>
        <div className="msg-section" >
          <p>New</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section" >
          <p>Sent</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section" >
          <p>Thread</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section" >
          <p>Trash</p>
          <div className="msg-line"></div>
        </div>
      </div>
      {message === "inbox" ? (
        <MessageContentInfo />
      ) : message === "new" ? (
        <MsgForm />
      ) : message === "thread" ? (
        <ThreadForm />
      ) : (
        <MessageContent />
      )}
      <div className="goTo">
        <button className="prev">
          <span className="arrow-left">&larr;</span>Prev
        </button>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>...</button>
          <button>5</button>
          <button>6</button>
        </div>
        <button className="next">
          Next<span className="arrow-right">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default MessageContent;*/


import React, { useState } from "react";
import "../Styles/MessageContent.css";
import MessageContentInfo from "./MessageContentInfo";
import MsgForm from "./MsgForm";
import ThreadForm from "./ThreadForm";

function MessageContent() {
  const [message, setMessage] = useState("inbox");
  const [markAllClicked, setMarkAllClicked] = useState(false);


  const handleMarkAllClick = () => {
    setMarkAllClicked(!markAllClicked);
    
  };

  return (
    <div className="messageContent">
      <div className="msg-top-bar">
        <div>
          <p className="msg-cnt-mb">
            Message <span>&gt;</span> Inbox
          </p>
          <h1>Messages</h1>
        </div>
        <div className="exit-new">
          <button className="markAll">Mark All</button>
          {markAllClicked ? (
            <button className="markRead">Delete Marked</button>
          ) : (
            <button className="markRead" onClick={handleMarkAllClick}>
              Mark All as Read
            </button>
          )}
        </div>
      </div>
      <div className="msg-nav">
        <div className="msg-section" onClick={() => setMessage("inbox")}>
          <p>Inbox</p>
          <div className="msg-line selected"></div>
        </div>
        <div className="msg-section" >
          <p>New</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section" >
          <p>Sent</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section" >
          <p>Thread</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section" >
          <p>Trash</p>
          <div className="msg-line"></div>
        </div>
      </div>
      {message === "inbox" ? (
        <MessageContentInfo />
      ) : message === "new" ? (
        <MsgForm />
      ) : message === "thread" ? (
        <ThreadForm />
      ) : (
        <MessageContent />
      )}
      <div className="goTo">
        <button className="prev">
          <span className="arrow-left">&larr;</span>Prev
        </button>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>...</button>
          <button>5</button>
          <button>6</button>
        </div>
        <button className="next">
          Next<span className="arrow-right">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default MessageContent;