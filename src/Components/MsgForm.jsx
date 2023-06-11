import React from 'react'

const MsgForm = () => {
  return (
    <form className='newMessage'>
        <div className="msg-heading">
            <div className="new-msg">
                <h2>New Message</h2>
                <p>sender@workermail.com</p>
            </div>
            <div className="email-div">
                <label htmlFor="email">To</label>
                <input type="email" placeholder='email@work.com'/>
            </div>
        </div>
        <div className="linediv"></div>
        <div className="msg-main">
            <div className="msg-title">
                <input type="text" placeholder='Message Title Here'/>
                <div className="ellipses">...</div>
            </div>
            <div className="linediv-sm"></div>
            <label htmlFor="body">Body</label>
            <textarea name="" id="" cols="30" rows="10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel laborum animi praesentium id ea suscipit vitae sapiente mollitia inventore perspiciatis, dolorum totam ut ipsum excepturi! Est ducimus voluptate veniam ex!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi, expedita perferendis, mollitia ad eligendi veniam corrupti in distinctio facilis quod ut vero quaerat rem maiores nam nostrum porro exercitationem.
            </textarea>
            <div className="linediv"></div>
            <button>Send</button>
        </div>
    </form>
  )
}

export default MsgForm