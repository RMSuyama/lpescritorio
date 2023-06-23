import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Painel from '../views/painel';
import Mailme from '../services/mailme';
import Footer from '../common/Footer/Footer';
import Painel1 from '../views/Painel1';


const Home = () => {
  return (
    <div>
      <Navbar />      
      <Painel1 />
      <Painel />
      <Mailme />
      <Footer />
    </div>
  );
}

export default Home;
