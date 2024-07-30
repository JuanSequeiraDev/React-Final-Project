import React from 'react'
import { setMook, obtenerWorkSpace, obtenerMook } from '../LocalStorage/localStorageFunctions'
import { Link, useParams } from 'react-router-dom'
import "./ChannelList.css"
import { DiGithub } from "react-icons/di";
import CreateChannel from './CreateChannel';


const ChannelList = () => {

    const { workspaceId } = useParams()

    const mook = obtenerMook()
    const workspaces = mook[workspaceId - 1]
    console.log(workspaces)
    /* const workspace = obtenerWorkSpace(workspaceId) */
    
    return (
        <section className='home-main'>
            <div className='workspace-header'>
                <Link to={'/'} className='home-link'>Slick<DiGithub className='slick-icon' /></Link>
            </div>
            <h2 className='ur-channels'>{workspaces.workspace_name}</h2>
            <div className='workspace-list'>
                {
                    workspaces.canales.map(canal =>{
                        return(
                            <div className='channel' key={canal.channel_id}>
                                <span className='home-text channel-name'>{canal.channel_name}</span>
                                <div className='link-box'>
                                    <Link to={"/workspace/" + workspaceId + '/' + canal.channel_id} className='home-text workspace-link'>Entrar</Link>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </section>
    )
}

export default ChannelList