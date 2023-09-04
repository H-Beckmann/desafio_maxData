import React, { useEffect, useState } from 'react'
import "./Client.css"
import { useNavigate, useParams } from 'react-router-dom'
import api from "../../services/api"

const Client = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [client, setClient] = useState({})

    useEffect(() => {
      // get cliente
      api.get(`/v1/cliente/consultar/${id}`,{
        headers:{
        'accept': `application/json`,
        'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElNYXhEYXRhIiwic3ViIjoiTWF4RGF0YSBTaXN0ZW1hcyIsImV4cCI6MTY5Mzg2MjgyOX0.Lxjf-EF6rKB21GLmRNDaOGROdwGpW3TwLAB56FalXD8`,
        'empId':`1`
      }}).then((response)=>{
        console.log(response.data)
        setClient(response.data)
      })
      
    }, [])
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        navigate("/")
    }

    return (
        <div className='client_wraper'>
            <div className='container'>
            <div>
                <h1>Detalhes do cliente</h1>
            </div>
            <h2>Nome: {client.nome}</h2>
            <h2>Email: {client.email}</h2>
            <h2>Telefone: {client.telefone}</h2>
            <h2>CPF/CNPJ: {client.cpfCnpj}</h2>
            <h2>Insc. Restadual: {client.rgInscEstadual}</h2>
            <button onClick={handleSubmit} className="btn btn-primary">Voltar</button>
            </div>
        </div>
    )
}

export default Client