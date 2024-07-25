import { MOOK } from "../../data"

export const guardarMook = (mook) =>{
    localStorage.setItem('mook', mook)
}

export const setMook= () => {
    const LS_mook = localStorage.getItem('mook')
    if(LS_mook === null){
    const JSON_string_mook = JSON.stringify(MOOK)
    localStorage.setItem('mook', JSON_string_mook)
    }
}

export const obtenerMook = () => {
    const LS_mook = localStorage.getItem('mook')
    const LS_object = JSON.parse(LS_mook)

    return LS_object
}



export const updateMook = (mook) => {
    if(mook){
        const objeto_string = JSON.stringify(mook)

        localStorage.setItem('mook', objeto_string)
    }else{
        const objeto_string = JSON.stringify(MOOK)

        localStorage.setItem('mook', objeto_string)
    }
}

export const addMessageMook = (workspaceId, channelId, mensajeNuevo) => {
    const mook = obtenerMook()

    mook[workspaceId].canales[channelId].mensajes.push(mensajeNuevo)

    localStorage.setItem('mook', JSON.stringify(mook))
}

export const obtenerWorkSpace = (id_workspace) =>{
    const mook = JSON.parse(localStorage.getItem('mook'))
    return mook.find(workspace => workspace.workspace_id == id_workspace)
    
}

export const obtenerCanal = (id_canal, id_workspace) =>{
    const workspace = obtenerWorkSpace(id_workspace)
    return workspace.canales.find(canal => canal.channel_id == id_canal)
}

export const obtenerMensaje = (id_canal, id_mensaje) =>{
    const canal = obtenerCanal(id_canal)
    canal.mensaje.find(mensaje => mensaje.id == id_mensaje)
}

export const crearWorkspace = (new_workspace) =>{
    const mook = obtenerMook()
    mook.workspace.push(new_workspace)
    guardarMook(mook)
}

export const cargarMook = () =>{
    const mook = obtenerMook()
}

export const validateAuthor = (author) =>{
    if(author.toLowerCase() == 'yo'){
        return(
            'my-message'
        )
    }
    else{
        return(
            'other'
        )
    }
}

/* export const guardarMessages = (channel) =>{
    localStorage.setItem('mensaje', JSON.stringify(channel))
}

export const guardarMensaje = (mensaje) =>{
    localStorage.setItem('mensaje', JSON.stringify(mensaje))
}

export const obtenerMessages = (channel) =>{
    const message_MOOK = localStorage.getItem('mensaje')
    if(message_MOOK){
        return JSON.parse(message_MOOK)
        }
        else{
            guardarMensaje(channel)
        }
} */

export const obtainContacts = async () =>{
    const response = await fetch(
        '/MOOK.json',
        {
            method: "GET"
        }
    )/*  .then(res => res.json())
    .then(data => data) */
    
    return response.json()
    /* console.log('data productos', data) *//* Practica para crear un objeto con el objeto de respuesta que se busca como valor, es utilizado cuando se repiten logeos de el mismo valor en distintos componentes/funciones */
}