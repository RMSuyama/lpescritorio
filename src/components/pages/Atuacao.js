import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import AreasAtuacao from '../views/AreasAtuacao.js';
import Footer from '../common/Footer/Footer';
import Newsletter from '../common/newsletter';


const Atuacao = () => {
  return (
    <div>

      <Navbar />      
      <AreasAtuacao />
      <Newsletter />
      <Footer />

    </div>
  );
}

export default Atuacao;
