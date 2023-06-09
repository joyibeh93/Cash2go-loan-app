import React from 'react';
import '../Styles/MessageContent.css';

function MessageContent() {
  return (
    <div>
        <div className="notification">
            <div>
                <p className='msg-cnt-mb'>
                    Message
                </p>
                <h2>Messages</h2>
            </div>
            <div className="exit-new">
                <button className="exisiting">Existing</button>
                <button className="new">New</button>
            </div>
        </div>
        <div>
            <div className='msg-cnt-note'>
                <div>
                    <h3>All Notifications</h3>
                    <p> Sorted by Date</p>
                </div>
                <div className='msg-cnt-dot'>
                    ...
                </div>
            </div>

        </div>
    </div>
  )
}

export default MessageContent