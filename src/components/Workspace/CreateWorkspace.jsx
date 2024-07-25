import React from 'react'
import { obtenerMook, setMook, updateMook } from '../LocalStorage/localStorageFunctions'
import './CreateWorkspace.css'

const CreateWorkspace = ({setWorkspace}) => {
    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!(e.target['new-workspace-name'].value === '') && !(e.target['new-channel-name'].value === '')){
            console.log(e)
            const newWorkspace = obtenerMook()

            newWorkspace.push({
                workspace_name: e.target['new-workspace-name'].value,
                birth_date:'19/07/2024',
                workspace_id: newWorkspace.length + 1,
                canales:[
                    {
                        channel_name: e.target['new-channel-name'].value,
                        channel_id: 1,
                        mensajes:[]
                    }
                ]
            })
            
            setWorkspace(newWorkspace)
            updateMook(newWorkspace)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='workspace-form'>
            <label htmlFor="new-workspace-name" className='labels'>Nuevo workspace</label>
            <input type="text" name='new-workspace-name' id='new-workspace-name' className='inputs' />
            <label htmlFor="new-channel-name" className='labels'>Nuevo canal:</label>
            <input type="text" name='new-channel-name' id='new-channel-name' className='inputs'/>
            <button type='submit' className='workspace-bttn'>Crear</button>
        </form>
    )
}

export default CreateWorkspace