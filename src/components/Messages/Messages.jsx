import React from 'react'
import "./Messages.css"

const Messages = () => {
    return (
        <div className="messagesWrapper">
            <div className="msg">
                <h4 className="msgHeader">Something!</h4>
                <div className="msgBody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat.</div>
                <button className="btn btnSm msgRemoveBtn">Remove</button>
            </div>
            <div className="msg">
                <h4 className="msgHeader">Something!</h4>
                <div className="msgBody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat.</div>
                <button className="btn btnSm msgRemoveBtn">Remove</button>
            </div>
            <div className="msg">
                <h4 className="msgHeader">Something!</h4>
                <div className="msgBody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat.</div>
                <button className="btn btnSm msgRemoveBtn">Remove</button>
            </div>
            <button className="btn btnSm msgClearBtn">Clear All</button>
        </div>
    )
}

export default Messages
