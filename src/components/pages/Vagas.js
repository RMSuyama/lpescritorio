import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import '../pages/Vagas.css'
import Footer from '../common/Footer/Footer';
import Vagatitle from '../titles/vagatitle';

const Vagas = () => {
  return (
    <div>
      <Navbar />
      <Vagatitle />
      <div id='vagaspad' className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Oportunidades de Carreira</h5>
          <p className="card-text">Confira as vagas disponíveis em nosso escritório e envie seu currículo para análise.</p>
          <a href="#" className="btn btn-primary">Ver Vagas</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vagas;
