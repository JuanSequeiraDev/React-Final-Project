import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Channel, Home } from './components'
import { cargarMook } from './components/LocalStorage/localStorageFunctions'
import ChannelList from './components/ChannelList/ChannelList'

function App() {
  cargarMook()

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workspace/:workspaceId' element={<ChannelList/>}/>
        <Route path='/workspace/:workspaceId/:channelId' element={<Channel/>}></Route>
      </Routes>
    </>
  )
}

export default App
