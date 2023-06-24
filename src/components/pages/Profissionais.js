import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import ProfissionaisL from '../views/profissionais';
import Newsletter from '../common/newsletter';
import Footer from '../common/Footer/Footer';
import Protitle from '../titles/protitle';


const Profissionais = () => {
  return (
    <div>

      <Navbar /> 
      <Protitle />
      <ProfissionaisL />
      <Newsletter />
      <Footer />

    </div>
  );
}

export default Profissionais;
