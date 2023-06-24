import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Blogview from '../views/blogview';
import Footer from '../common/Footer/Footer';
import Newsletter from '../common/newsletter';
import Publititle from '../titles/publititle';


const Publicacoes = () => {
  return (
    <div>

      <Navbar />
      <Publititle />
      <Blogview />
      <Newsletter />
      <Footer />
    

    </div>
  );
}

export default Publicacoes;
