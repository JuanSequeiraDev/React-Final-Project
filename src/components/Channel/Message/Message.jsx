import React from 'react'
import './MessageList.css'

const Message = ({author, date, text, id}) => {
    

    return (
        <div className={validateAuthor(author)}>
            <div className='msg-bubble' key={id}>
                <div className="message-header">
                    <span className='chat-text author'>{author}</span>
                    <span className='chat-text date'>- {date}</span>
                </div>
                <div className='text-box'>
                    <span className='chat-text text'>{text}</span>
                </div>
            </div>
        </div>
    )
}

export default Message