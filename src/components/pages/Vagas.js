import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import '../pages/Vagas.css'
import Footer from '../common/Footer/Footer';
import Vatitle from '../titles/vatitle';
import Newsletter from '../common/newsletter';

const Vagas = () => {
  return (
    <div>
      <Navbar />
      <Vatitle />
      <div id='vagaspad' className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Oportunidades de Carreira</h5>
          <p className="card-text">Confira as vagas disponíveis em nosso escritório e envie seu currículo para análise.</p>
          <a href="#" className="btn btn-primary">Ver Vagas</a>
        </div>
      </div>
      <Newsletter />
      
      <Footer />
    </div>
  );
}

export default Vagas;
