import React, { useEffect, useState } from 'react'
import { obtenerMook, setMook, updateMook } from '../LocalStorage/localStorageFunctions'
import './CreateWorkspace.css'
import { Link } from 'react-router-dom'

const CreateWorkspace = () => {
    const [workspace, setWorkspace] = useState([])

    useEffect(() => {
        if(workspace.length === 0){
            setWorkspace(obtenerMook())
        }
    },[workspace])
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!(e.target['new-workspace-name'].value === '') && !(e.target['new-channel-name'].value === '')){
            console.log(e)

            workspace.push({
                workspace_name: e.target['new-workspace-name'].value,
                birth_date:'19/07/2024',
                workspace_id: workspace.length + 1,
                canales:[
                    {
                        channel_name: e.target['new-channel-name'].value,
                        channel_id: 1,
                        mensajes:[]
                    }
                ]
            })
            
            setWorkspace(workspace)
            updateMook(workspace)
            location.replace('/')
        }
    }

    return (
        <main className='create-workspace-main'>
            <div className='link-box'>
                <Link to='/' className='atras-link'>Volver</Link>
            </div>
            <form onSubmit={handleSubmit} className='workspace-form'>
            <div className='create-workspace-title'><h2 className='title-text'>Crea tu espacio de trabajo!</h2></div>
            <div className='form-box'>
                <label htmlFor="new-workspace-name" className='labels'>Nombre del workspace</label>
                <input type="text" name='new-workspace-name' id='new-workspace-name' className='inputs' />
                <label htmlFor="new-channel-name" className='labels'>Nombre del canal</label>
                <input type="text" name='new-channel-name' id='new-channel-name' className='inputs'/>
                <button type='submit' className='workspace-bttn'>Crear</button>
            </div>
            </form>
        </main>
    )
}

export default CreateWorkspace