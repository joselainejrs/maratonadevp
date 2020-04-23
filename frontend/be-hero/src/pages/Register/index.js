import React from  'react';

import {Link} from  'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoimg from '../../assests/Logo.svg';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoimg} alt="Be the Hero"/>

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                <Link  className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                     Voltar
                </Link>
                </section>

                <form>
                    <input
                     placeholder="Nome da ONG" 
                     value=""
                     />
                    
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    value=""
                    />

                    <input 
                    placeholder="WhatsApp" 
                    value=""
                    />
                    
                    <div className="input-group">

                        <input 
                        placeholder="Cidade" 
                        value=""
                        />

                        <input 
                        placeholder="UF" 
                        value=""
                        style={{ width:80 }}
                        />
                    </div>
    
                    <button className="button" type="submit">
                          Cadastrar  
                        </button>

                </form>
            </div>
        </div>
    );
}