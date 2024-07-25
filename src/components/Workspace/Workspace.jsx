import React from 'react'

const Workspace = ({workspace_name, workspace_id}) => {
    return (
        <div className='channel' key={workspace_id}>
            <span className='home-text workspace-name'>{workspace_name}</span>
            <div className='link-box'>
                <Link to={'/workspace/' + workspace_id} className='home-text workspace-link'>Entrar</Link>
            </div>
        </div>
        
    )
}

export default Workspace