import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerMook, updateMook } from '../LocalStorage/localStorageFunctions'
import './CreateChannel.css'


const CreateChannel = () => {
    const {workspaceId, channelId} = useParams()
    const IdWorkspace = workspaceId - 1
    console.log(IdWorkspace)
    const [workspace, setWorkspace] = useState([])

    useEffect(() => {
        if(workspace.length === 0){
            setWorkspace(obtenerMook())
        }
    },[workspace])
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!(e.target['new-channel-name'].value === '') && (e.target['new-channel-name'].value.length <= 20)){
            console.log(e.target['new-channel-name'].value.length)

            workspace[IdWorkspace].canales.push(
                    {
                        channel_name: e.target['new-channel-name'].value,
                        channel_id: workspace[IdWorkspace].canales.length + 1,
                        mensajes:[]
                    },
            )
            
            setWorkspace(workspace)
            updateMook(workspace)
            location.reload()
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='channel-create-form'>
                <input type="text" name='new-channel-name' id='new-channel-name' placeholder='Limite 20 caracteres' className='channel-name-input'/>
                <button type='submit' className='channel-name-bttn'>Crear</button>
            </form>
            <span id='advertencia-limite'></span>
        </>
    )
}

export default CreateChannel