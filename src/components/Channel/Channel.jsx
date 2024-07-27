import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Channel.css'
import { guardarMook, obtenerCanal, setMook, obtenerWorkSpace, obtenerMook} from '../LocalStorage/localStorageFunctions'

import { DiGithub } from "react-icons/di";
import MessageList from './Message/MessageList';
import { MessageForm } from '..';
import { MdDoNotStep } from 'react-icons/md';
import ChannelListDeploy from './ChannelListDeploy';

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
                    <ChannelListDeploy/>
                    {/* <Link to={'/workspace/' + workspaceId}></Link> */}
                    <Link to={'/'}><DiGithub className='icon-home' /></Link>
                </nav>
            </div>
            <div className='chat-container'>
                <h3 className='channel-title'>{channel.channel_name}</h3>
                <MessageList />
            </div>
            
            <MessageForm setMessages={setMessages} messages={messages}/>
        </main>
        
    )
}

export default Channel