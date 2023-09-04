import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateClient() {
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
        // put cliente passando o client
        navigate("/")
    }

    const handleChange = (e) =>{
        const auxClient = {...client}
        auxClient[e.target.name] = e.target.value
        setClient(auxClient)
    }

    return (
        <div className='client_wraper'>
            <div className='container'>
            <div>
                <h2>Atualizar Cliente</h2>
            </div>
                <form className='client'>
                    <input type="text" name='nome' value={client.nome} onChange={handleChange} />
                    <input type="text" name='cidade' value={client.cidade} onChange={handleChange}/>
                    <button onClick={handleSubmit} className="btn btn-primary">Atualizar</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateClient