import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Channel.css'
import { guardarMook, obtenerCanal, setMook, obtenerWorkSpace, obtenerMook} from '../LocalStorage/localStorageFunctions'
import { FaBars } from "react-icons/fa";
import { DiGithub } from "react-icons/di";
import MessageList from './Message/MessageList';
import { MessageForm } from '..';
import { MdDoNotStep } from 'react-icons/md';

const Channel = () => {
    const { workspaceId, channelId } = useParams()
    const [messages, setMessages] = useState()

    const mook = obtenerMook()
    const workspaces = mook[workspaceId - 1]
    const channel = workspaces.canales[channelId - 1]
    
    useEffect(
        ()=>{
            setMessages(channel.mensajes)
        },
        [channelId]
    )

    console.log(messages)

    return (
        <main className='channel-screen'>
            <div className='channel-header'>
                <h2 className='workspace-title'>{workspaces.workspace_name}</h2>
                <nav className='icons'>
                    <Link to={'/workspace/' + workspaceId}><FaBars className='icon' /></Link>
                    <Link to={'/'}><DiGithub className='icon-home' /></Link>
                </nav>
            </div>
            <h3 className='channel-title'>{channel.channel_name}</h3>
            <MessageList />
            <MessageForm setMessages={setMessages} messages={messages}/>
        </main>
        
    )
}

export default Channel