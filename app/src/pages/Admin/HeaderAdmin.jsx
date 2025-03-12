import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBranco from '../../components/img/logoBranco.png';

/**
 * Componente de cabeçalho para a área administrativa.
 * Exibe a logo, o título e os links de navegação.
 */
const HeaderAdmin = () => {
  const location = useLocation();  // Hook para obter a localização atual da rota

  /**
   * Função para determinar a classe CSS do link ativo.
   * @param {string} path - Caminho da rota.
   * @returns {string} - Retorna 'active' se o caminho da rota atual for igual ao parâmetro, caso contrário, retorna uma string vazia.
   */
  const getLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logoBranco} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li className={getLinkClass('/home')}>
              <Link to="/home">Home</Link>
            </li>
            <li className={getLinkClass('/alunos')}>
              <Link to="/alunos">Alunos</Link>
            </li>
            <li className={getLinkClass('/dashboard')}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className={getLinkClass('/usuarios')}>
              <Link to="/usuarios">Usuários</Link>
            </li>
            <li>
              {/* Substitua o Logout pelo seu componente ou ação de logout */}
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between; /* Espaça a logo e os links */
          align-items: center; /* Alinha os itens verticalmente no centro */
          background-color: #B9171C;
          padding: 10px 20px;
        }

        .logo-container {
          display: flex;
          justify-content: flex-start; /* Logo à esquerda */
        }

        .logo {
          width: 150px;
          height: auto;
        }

        nav ul {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        nav li {
          margin-left: 20px; /* Espaço entre os links */
        }

        nav li a {
          color: white;
          text-decoration: none;
          font-size: 16px;
        }

        nav li a:hover {
          text-decoration: underline;
        }

        nav .active a {
          font-weight: bold;
          color: #FFD700; /* Cor para o link ativo */
        }
      `}</style>
    </>
  );
};

export default HeaderAdmin;
