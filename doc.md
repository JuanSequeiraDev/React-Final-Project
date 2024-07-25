const obtenerMook= () => {
    const JSON_mook = localstorage.getItem('mook')
    if(JSON_mook){
    return JSON.parse(JSON_mook)
    }
    else{
        <!-- Carga manual del mook -->
        <!-- El mook lo pueden importar de algun archivo .js que tengamos como el data.js de el proyecto e-commerce -->
        guardarMook(mook_importado)
    }
}

const guardarMook = (mook) =>{
    localStorage.setItem('mook', JSON.stringify(mook))
}

const obtenerWorkspace = (id_workspace) =>{
    const MOOK = JSON.parse(localstorage.getItem('mook'))
    mook.workspace.find(workspace => workspace.id === id_workspace)
}

const obtenerCanal = (id_canal, id_workspace) =>{
    const workspace = obtenerWorkSpace(id_workSpace)
    <!-- validamos que exista el workspace -->
    return workspace.canales.find(canal => canal.id === id_canal)
}

const obtenerMensaje = (id_canal, id_mensaje) =>{
    const canal = obtenerCanal
    <!-- Validamos que exista el canal -->
    canal.mensaje.find(mensaje => mensaje.id === id_mensaje)
}

const crearWorkspace = (new_workspace) =>{
    const mook = obtenerMook()
    mook.workspace.push(new_workspace)
    guardarMook(mook)
}

const cargarMook = () =>{
    const mook = obtenerMook()
}