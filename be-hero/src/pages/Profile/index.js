import React, {useState, useEffect} from  'react';

import {Link, useHistory } from  'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';

import logoimg from '../../assests/Logo.svg';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const history = useHistory(); 
    //para aparecer o nome da empresa que esta consultando a pagina 
    //atual
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile',{
            headers:{
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

         //Função para conseguir deletar casos
        async function handleDeleteIncident(id){
            try{
                await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
                });

                //Caminha para atualizar a mundança feita em tempo real,
                //na Hora de realizar o deletar
                setIncidents(incidents.filter(incident => incident.id != id));
            }catch (err){
                alert('Erro ao deletar caso, tente novamente.');
            }
        }

        // Desconectar 
        function handleLogout(){
            //limpa todos os dados logados
            localStorage.clear();
            
            //Fazer voltar a rota inicial
            history.push('/');
        }

    return (
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
                
                {/* Botão para deslogar  */}
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>               
                </button>
            
            </header>

            <h1>Casos Cadastrado</h1>

            <ul>
                {incidents.map(incident =>(
                        <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
    
                        <strong>DESCRIÇÂO:</strong>
                        <p>{incident.description}</p>
    
                        <strong>VALOR:</strong>
                        {/* para deixar em reais  */}                                                     {/*valor*/}                                   
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        {/* botão de deletar  */}
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>               
                        </button>
                        
                    </li> 
                ))}           
            </ul>

        </div>
    );
}