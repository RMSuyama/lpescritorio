import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Painel from '../views/painel';
import Mailme from '../services/mailme';
import Footer from '../common/Footer/Footer';
import Painel1 from '../views/Painel1';
import Newsletter from '../common/newsletter';


const Home = () => {
  return (
    <div>
      <Navbar />      
      <Painel1 />
      <Newsletter />
      
      <Footer />
      </div>
  );
}

export default Home;
