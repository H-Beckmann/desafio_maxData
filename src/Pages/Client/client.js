import React, { useEffect, useState } from 'react'
import "./client.css"
import { useNavigate, useParams } from 'react-router-dom'

const Client = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [client, setClient] = useState({})

    useEffect(() => {
      // get cliente 
      setClient({
        "id" : 1,
        "nome" : "Aaa",
        "cidade" : "teste"
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
            <h2>Cidade: {client.cidade}</h2>
                    <button onClick={handleSubmit} className="btn btn-primary">Voltar</button>
            </div>
        </div>
    )
}

export default Client