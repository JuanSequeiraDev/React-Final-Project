import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { obtenerMook, setMook } from '../LocalStorage/localStorageFunctions'
import CreateWorkspace from '../Workspace/CreateWorkspace'

const Home = () => {
    const [storageMOOK, setStorageMOOK] = useState([])

    setMook()

    useEffect(() => {
        if(storageMOOK.length === 0){
            setStorageMOOK(obtenerMook())
        }
    },[storageMOOK])
    
    const handleReset = () =>{
        location.reload()
        localStorage.clear()
    }

    return (
        <main className='home-main'>
            <h1 className='welcome-title'>Bienvenido a slick</h1>
            <div className='workspace-list'>
            <h2 className='ur-workspaces'>Tus entornos de trabajo:</h2>
                {
                    storageMOOK.map(workspace =>{
                        const {workspace_name, workspace_id} = workspace
                        return(
                            <div className='channel' key={workspace_id}>
                                <span className='home-text workspace-name'>{workspace_name}</span>
                                <div className='link-box'>
                                    <Link to={'/workspace/' + workspace_id} className='home-text workspace-link'>Entrar</Link>
                                </div>
                            </div>
                        )
                    }
                        
                    )
                }
            </div>
            <div className='button-box'>
                <button onClick={handleReset} className='reset-bttn'>Reinicar LocalStorage</button>
                <Link to={'/createWorkspace'} className='workspace-form-link'>Crear Workspace</Link>
            </div>
        </main>
    )
}
/* <main className='home-main'>
            <h1 className='welcome-title'>Bienvenido a slick</h1>
            <div className='workspace-list'>
            <h2 className='ur-workspaces'>Tus entornos de trabajo:</h2>
                {
                    storageMOOK.workspaces.map(workspace =>{
                        return(
                            <div className='channel' key={workspace.workspace_id}>
                                <span className='home-text workspace-name'>{workspace.workspace_name}</span>
                                <div className='link-box'>
                                    <Link to={'/workspace/' + workspace.workspace_id} className='home-text workspace-link'>Entrar</Link>
                                </div>
                            </div>
                        )
                    }
                        
                    )
                }
            </div>
            <div className='button-box'>
                <button type='submit' className='create-workspace home-text'>Crear entorno</button>
            </div>
        </main> */

export default Home