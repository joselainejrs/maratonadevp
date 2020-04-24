import React, {useState} from 'react';

import {Link, useHistory} from  'react-router-dom'
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import heroimg from '../../assests/hero.png';
import logoimg from '../../assests/Logo.svg';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();
   
        try{
            const response = await api.post('session', {id});

            //salvar os dados de quem esta logando, para poder ter acesso
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

        history.push('/profile');
        }catch (err){
            alert('Erro ao realizar o login, tente novamente.');
        };
    }
  return (
 <div className="logon-container">
     <section className="form">
    <img src={logoimg} alt="Be the Hero"/>

    <form onSubmit={handleLogon}>
        <h1>Faça seu Logon</h1>

        <input 
         placeholder="Sua ID"
         value={id}
         onChange={e => setId(e.target.value)}
         />
        <button className="button" type="submit">Entrar</button>

        <Link  className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não Tenho Cadastro
        </Link>
    </form>   

     </section>

     <img src={heroimg} alt="Heroes"/>
 </div>

   
  );
}


