import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import ProfissionaisL from '../views/profissionais';
import Newsletter from '../common/newsletter';
import Footer from '../common/Footer/Footer';


const Profissionais = () => {
  return (
    <div>

      <Navbar /> 
      <Profissionais />     
      <ProfissionaisL />
      <Newsletter />
      <Footer />

    </div>
  );
}

export default Profissionais;
