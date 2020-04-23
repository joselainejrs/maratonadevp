import React from  'react';

import {Link} from  'react-router-dom'
import {FiPower} from 'react-icons/fi';

import './styles.css';

import logoimg from '../../assests/Logo.svg';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidentes/new">Cadastrar novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>               
                </button>
            </header>

            <h1>Casos Cadastrado</h1>
        </div>
    );
}