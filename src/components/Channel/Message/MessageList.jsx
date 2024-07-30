import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerCanal, validateAuthor } from '../../LocalStorage/localStorageFunctions'
import './MessageList.css'


const MessageList = () => {
    const {workspaceId, channelId} = useParams()

    const channel = obtenerCanal(channelId, workspaceId)
    
    return (
        <div>
            {
                channel.mensajes.map(chat =>{
                    return(
                        <div className={validateAuthor(chat.author)} key={chat.message_id}>
                            <div className='msg-bubble' key={chat.message_id}>
                                <div className="message-header">
                                    <span className='chat-text author'>{chat.author}</span>
                                    <span className='chat-text date'>- {chat.date}</span>
                                </div>
                                <div className='text-box'>
                                    <p className='chat-text text'>{chat.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}



export default MessageList