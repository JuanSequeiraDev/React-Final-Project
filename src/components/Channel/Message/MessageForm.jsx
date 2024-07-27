import React from 'react'
import './MessageForm.css'
import { addMessageMook, guardarMook, obtenerMook } from '../../LocalStorage/localStorageFunctions'
import { useParams } from 'react-router-dom'

const MessageForm = ({messages, setMessages}) => {

    const {workspaceId, channelId} = useParams()

    const mook = obtenerMook()
    const workspace = mook[workspaceId - 1]
    const canal = workspace.canales[channelId - 1]

    /* console.log(canal) */
    const Idworkspace = workspaceId - 1
    const Idchannel = channelId - 1
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const mensajeNuevo = e.target[0].value

        if(mensajeNuevo){
            setMessages([...messages, 
                {
                    author: 'Yo',
                    author_img: '',
                    text: mensajeNuevo,
                    date: 'ahora',
                    message_id: messages.length + 1
                }]
            )
    
            addMessageMook( Idworkspace, Idchannel, {
                author: 'Yo',
                author_img: '',
                text: mensajeNuevo,
                date: 'ahora',
                message_id: messages.length + 1
            })
        }
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input type="text" name='message' className='text-input'/>
            <button type="submit" className='text-submit-bttn'>Upload</button>
        </form>
    )
}

export default MessageForm