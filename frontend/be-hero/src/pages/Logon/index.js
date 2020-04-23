import React from 'react';
import {Link} from  'react-router-dom'
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import heroimg from '../../assests/hero.png';
import logoimg from '../../assests/Logo.svg';

function Logon() {
  return (
 <div className="logon-container">
     <section className="form">
    <img src={logoimg} alt="Be the Hero"/>

    <form action="">
        <h1>Faça seu Logon</h1>

        <input placeholder="Sua ID"/>
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

export default Logon;
