import React, { useEffect, useState } from 'react';
import '../views/Painel1.css';
import Bg from '../../static/img/cup-of-coffee-1280537_1280.jpg';

const Painel1 = () => {
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calcula a porcentagem do componente visível na tela
      const visiblePercentage = 1 - Math.max(0, Math.min(scrollPosition, windowHeight)) / windowHeight;

      // Define a opacidade do texto com base na porcentagem visível
      setTextOpacity(visiblePercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card text-bg-dark">
      <img src={Bg} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title" id="painel1-title" style={{ opacity: textOpacity }}>SUYAMA & MANZO</h5>
        <p className="card-text" id="painel1-text" style={{ opacity: textOpacity }}>ADVOGADOS ASSOCIADOS</p>
      </div>
      
    </div>
  );
};

export default Painel1;

