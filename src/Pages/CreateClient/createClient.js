import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import "./CreateClient.css"
import api from "../../services/api"

function CreateClient() {
    const navigate = useNavigate()
    const [client, setClient] = useState({
        codigo: 0,
        tipo: "tpFisica",
        tipoCad: "tpCliente",
        nome: "",
        fantasia: "",
        cidade: "",
        uf: "",
        cpfCnpj: "",
        rgInscEstadual: "",
        telefone: "",
        celular: "",
        obs: ""
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            console.log(client)
            api.post("/v1/cliente/cadastrar",client,{
                headers:{
                    'accept' : 'application/json',
                    'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElNYXhEYXRhIiwic3ViIjoiTWF4RGF0YSBTaXN0ZW1hcyIsImV4cCI6MTY5Mzg2MjgyOX0.Lxjf-EF6rKB21GLmRNDaOGROdwGpW3TwLAB56FalXD8`,
                    'empId':`1`,
                    'Content-Type': 'application/json',
                }
            })
        } catch (error) {
            console.log(error)
        }
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
                    <input type="text" name='fanatsia' placeholder="Fantasia" onChange={handleChange}/>
                    <input type="text" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    <input type="text" name='uf' placeholder="UF" onChange={handleChange}/>
                    <input type="text" name='cpfCnpj' placeholder="CPF/CNPJ" onChange={handleChange}/>
                    <input type="text" name='rgInscEstadual' placeholder="Insc. Estadual" onChange={handleChange}/>
                    <input type="text" name='telefone' placeholder="Telefone" onChange={handleChange}/>
                    <input type="text" name='celular' placeholder="Celular" onChange={handleChange}/>
                    <input type="text" name='obs' placeholder="Obs" onChange={handleChange}/>
                    <button onClick={handleSubmit} className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default CreateClient