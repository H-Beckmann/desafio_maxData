import React, { useEffect, useState } from 'react'
import "./clients.css"
import { useNavigate } from 'react-router-dom';

const Clients = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [clients, setClients] = useState([]);

    const handleDelete = async (client) =>{
        try{
            setClients(clients.filter((c)=>c.id !== client.id))
            // delete passando client.id
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        setClients([
            {
              "id" : 1,
              "nome" : "Aaa",
              "cidade" : "Aaaa"
            },
            {
              "id" : 2,
              "nome" : "Baa",
              "cidade" : "Baa"
            },
            {
              "id" : 3,
              "nome" : "Caa",
              "cidade" : "Caa"
            }
          ])
        //requisição da api (api.get()headers)
    },[]);
    return (
        <div className="clients">
            <div className='container'>
            <div className='buttons_container'>
            <button onClick={()=> navigate("createclient/")} className="btn btn-primary mb-4">Adicionar cliente</button>
            <button className="btn btn-secondary mb-3">{token==null? "Autenticar":"Autenticado"}</button>
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
                        <tr key={client.id}>
                            <td>{client.nome}</td>
                            <td>{client.cidade}</td>
                            <td><button className="btn btn-primary" onClick={()=>navigate(`client/${client.id}`)}>Detalhes</button></td>
                            <td><button className="btn btn-primary" onClick={()=>navigate(`updateclient/${client.id}`)}>Atualizar</button></td>
                            <td><button className="btn btn-danger" onClick={()=>handleDelete(client)}>Deletar</button></td>
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