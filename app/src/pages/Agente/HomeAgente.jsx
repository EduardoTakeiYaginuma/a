import React from 'react';
import HeaderAgente from './HeaderAgente';
import CasosTable2 from './CasosTable'
import './static/HomeAgente.css';

function HomeAgente() {
    return (
        <div className="home-Agente">
            <HeaderAgente />
            <div className="search-container">
                <CasosTable2 /> {/* Utilizando o componente CasosTable */}
            </div>
        </div>
    );
}

export default HomeAgente;