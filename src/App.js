import React from 'react'
import Clients from "././Pages/Clients/clients"
import Client from "././Pages/Client/client"
import { Route, Routes } from 'react-router-dom'
import UpdateClient from './Pages/UpdateClient/updateClient'
import CreateClient from './Pages/CreateClient/createClient'
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