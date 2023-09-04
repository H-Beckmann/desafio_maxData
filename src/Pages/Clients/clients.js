import React, { useEffect, useState } from 'react'
import "./Clients.css"
import { useNavigate } from 'react-router-dom';
import api from "../../services/api"
const Clients = () => {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);

    const handleDelete = async (client) =>{
        try{
            setClients(clients.filter((c)=>c.codigo !== client.codigo))
            api.put(`/v1/cliente/desativar/${client.codigo}`,{
                headers:{
                    'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElNYXhEYXRhIiwic3ViIjoiTWF4RGF0YSBTaXN0ZW1hcyIsImV4cCI6MTY5Mzg1NjQzNn0.-hG9-lZH9nb1MwRK5D1iSVHHXgnGGdyNrvxs-KeH_tI`,
                    'empId':"1",
                }
            }).then((response)=>console.log(response.data))
            // delete passando client.id
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        api.get(`v1/cliente/consultar?&limit=100&page=1&nome=`,{
            headers:{
            'accept': `application/json`,
            'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElNYXhEYXRhIiwic3ViIjoiTWF4RGF0YSBTaXN0ZW1hcyIsImV4cCI6MTY5Mzg2MjgyOX0.Lxjf-EF6rKB21GLmRNDaOGROdwGpW3TwLAB56FalXD8`,
            'empId':`1`
          }}).then((response)=>{
            console.log(response.data)
            setClients(response.data.docs)
          })
    },[]);
    return (
        <div className="clients">
            <div className='container'>
            <div className='buttons_container'>
            <button onClick={()=> navigate("createclient/")} className="btn btn-primary mb-4">Adicionar cliente</button>
            </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>Detalhes</th>
                            <th>Atualizar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {clients.map(client=>
                        <tr key={client.codigo}>
                            <td>{client.nome}</td>
                            <td>{client.cidade}</td>
                            <td><button className="btn btn-primary" onClick={()=>navigate(`client/${client.codigo}`)}>Detalhes</button></td>
                            <td><button className="btn btn-primary" onClick={()=>navigate(`updateclient/${client.codigo}`)}>Atualizar</button></td>
                            <td><button className="btn btn-danger" onClick={()=>handleDelete(client)}>Desativar</button></td>
                        </tr>
                    )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Clients