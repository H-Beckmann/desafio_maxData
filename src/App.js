import React from 'react'
import Clients from "./Pages/Clients/Clients"
import Client from "./Pages/Client/Client"
import { Route, Routes } from 'react-router-dom'
import UpdateClient from './Pages/UpdateClient/UpdateClient'
import CreateClient from './Pages/CreateClient/CreateClient'
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Clients />}/>
    <Route path='/client/:id' element={<Client />} />
    <Route path='/updateclient/:id' element={<UpdateClient />}/>
    <Route path='/createclient/' element={<CreateClient />}/>
    </Routes>
  )
}

export default App