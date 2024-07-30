import React, { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { obtenerCanal, obtenerWorkSpace } from '../LocalStorage/localStorageFunctions'
import CreateChannel from '../ChannelList/CreateChannel'
import './ChannelListDeploy.css'
import { FaBars } from "react-icons/fa";

const ChannelListDeploy = () => {
    const {workspaceId, channelId} = useParams()


    const workspace = obtenerWorkSpace(workspaceId)
    console.log(workspace)
    const [displayValue, setDisplayValue] = useState('none')
    const [channelBttnDisplay, setChannelBttnDisplay] = useState('none')

    const handleDisplay = () => {
        if (displayValue === 'none') {
            setDisplayValue('')
        } 
        else {
            setDisplayValue('none')
        }
    }

    const handleChannelBttnDisplay = () =>{
        if (channelBttnDisplay === 'none') {
            setChannelBttnDisplay('')
        } 
        else {
            setChannelBttnDisplay('none')
        }
    }
    
    return (
        <>
        
        <nav style={{display: displayValue}} className='nav-display'>
            <div className='nav-content-box'>
                <div className='deployable-nav'>
                    <h2 className='deploy-title'>{workspace.workspace_name}</h2>
                    <h2 className='deploy-title-alt'>Canales</h2>
                    {
                        workspace.canales.map(channel =>{
                            const {channel_id, channel_name} = channel
                            return(
                                <Link to={'/workspace/' + workspaceId + '/' + channel_id} className='channel-link'>#{channel_name}</Link>
                        )
                        })
                    }
                </div>
                <div className='deployable-footer'>
                    <div className='create-channel-box'>
                        <button className='create-channel-bttn' onClick={handleChannelBttnDisplay}>Crear Canal</button>
                    </div>
                    <div style={{display: channelBttnDisplay}} className='create-channel-form'>
                        <CreateChannel/>
                    </div>
                </div>
            </div>
        </nav>
        <button className='display-bttn' onClick={handleDisplay} ><FaBars className='icon' /></button>
        </>
    )
}

export default ChannelListDeploy