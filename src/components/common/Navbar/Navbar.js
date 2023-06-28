import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css';
import logo from '../../../static/img/logos/logosm.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
         <a className="navbar-brand" href="/"> <img src={logo} className="img" alt="..." />
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/atuacao" style={{ color: 'black', textDecoration: 'none' }}>Áreas de Atuação</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vagas" style={{ color: 'black', textDecoration: 'none' }}>Vagas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profissionais" style={{ color: 'black', textDecoration: 'none' }}>Profissionais</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/publicacoes" style={{ color: 'black', textDecoration: 'none' }}>Publicações</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/politicasdeprivacidade" style={{ color: 'black', textDecoration: 'none' }}>Políticas de Privacidade</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
