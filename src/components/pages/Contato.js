import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Painel from '../views/painel';
import Contitle from '../titles/contitle';


const Contato = () => {
  return (
    <div>

      <Navbar />  
      <Contitle />
      <div>contato</div>
      <Painel />

    </div>
  );
}

export default Contato;
