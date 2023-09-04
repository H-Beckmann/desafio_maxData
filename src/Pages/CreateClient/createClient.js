import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

function CreateClient() {
    const navigate = useNavigate()
    const [client, setClient] = useState({})
    const handleSubmit = async (e) =>{
        e.preventDefault();
        // post cliente passando o client
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
                <h2>Cadastrar Cliente</h2>
            </div>
            <form className='client'>
                    <input type="text" name='nome' placeholder="Nome" onChange={handleChange} />
                    <input type="text" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    <button onClick={handleSubmit} className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default CreateClient