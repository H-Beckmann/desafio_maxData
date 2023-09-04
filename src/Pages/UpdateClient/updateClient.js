import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./UpdateClient.css"
import api from "../../services/api"

function UpdateClient() {
    const navigate = useNavigate()
    const { id } = useParams()
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
        try {
            api.put("/v1/cliente/atualizar",client,{
                headers:{
                    'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElNYXhEYXRhIiwic3ViIjoiTWF4RGF0YSBTaXN0ZW1hcyIsImV4cCI6MTY5Mzg2MjgyOX0.Lxjf-EF6rKB21GLmRNDaOGROdwGpW3TwLAB56FalXD8`,
                    'empId':`1`,
                    "Content-Type": "application/json"
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
                <h2>Atualizar Cliente</h2>
            </div>
                <form className='client'>
                    <label>Nome</label>
                    <input type="text" name='nome' value={client.nome} onChange={handleChange} />
                    <label>Email</label>
                    <input type="text"  name='email' value={client.email} onChange={handleChange} />
                    <label>Fantasia</label>
                    <input type="text" name='fantasia' value={client.fantasia} onChange={handleChange}/>
                    <label>CPF/CNPJ</label>
                    <input type="text" name='cpfCnpj' value={client.cpfCnpj} onChange={handleChange}/>
                    <label>IncEstadual</label>
                    <input type="text" name='rgInscEstadual' value={client.rgInscEstadual} onChange={handleChange}/>
                    <label>Telefone</label>
                    <input type="text" name='telefone' value={client.telefone} onChange={handleChange}/>
                    <label>Celular</label>
                    <input type="text" name='celular' value={client.celular} onChange={handleChange}/>
                    <button onClick={handleSubmit} className="btn btn-primary">Atualizar</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateClient