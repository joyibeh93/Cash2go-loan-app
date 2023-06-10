import React from 'react';
import '../Styles/MessageContent.css';
import MessageContentInfo from './MessageContentInfo';


function MessageContent() {
  return (
    <div>
        <div className="notification">
            <div>
                <p className='msg-cnt-mb'>
                    Message <span>&gt;</span>
                </p> 
                <h2>Messages</h2>
            </div>
            <div className="exit-new">
                <button className="markAll">Mark All</button>
                <button className="deleteMarked">Delete Marked</button>
            </div>
        </div>
        <div className="msg-nav">
            <div className="msg-section">
                <p>Inbox</p>
                <div className="msg-line"></div>
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
        <div>
            <div className='msg-cnt-note'>
                <div>
                    <h3>Inbox</h3>
                    <p> Sorted by Date</p>
                </div>
                <div className='msg-cnt-dot'>
                    <MessageContentInfo/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MessageContent