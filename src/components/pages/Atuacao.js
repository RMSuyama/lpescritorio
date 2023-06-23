import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Painel from '../views/painel';
import AreasAtuacao from '../views/AreasAtuacao.js';
import Footer from '../common/Footer/Footer';
import Newsletter from '../common/newsletter';


const Atuacao = () => {
  return (
    <div>

      <Navbar />      
      <Atuacao />
      <AreasAtuacao />
      <Newsletter />
      <Footer />

    </div>
  );
}

export default Atuacao;
