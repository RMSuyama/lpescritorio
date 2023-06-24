import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Painel from '../views/painel';
import Footer from '../common/Footer/Footer'
import Contitle from '../titles/contitle';


const Contato = () => {
  return (
    <div>

      <Navbar />  
      <Contitle />
      <div>contato</div>
      <Painel />
      <Footer />


    </div>
  );
}

export default Contato;
