import React from 'react';
import HeaderAgente from '../Headers&Homes/HeaderAluno';
import CasosTable2 from './ListaAulas'
import './static/HomeAgente.css';

function HomeAgente() {
    return (
        <div className="home-Agente">
            <HeaderAgente />
            <CasosTable2 /> {/* Utilizando o componente CasosTable */}
        </div>
    );
}

export default HomeAgente;