import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer'
import Contitle from '../titles/polititle';
import Contact from '../views/Politicas';
import Newsletter from '../common/newsletter';


const Contato = () => {
  return (
    <div>

      <Navbar />  
      <Contitle />
      <Contact />
      <Newsletter />
      <Footer />


    </div>
  );
}

export default Contato;
