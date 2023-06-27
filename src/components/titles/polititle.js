import React, { useEffect, useState } from 'react';
import '../titles/polititle.css';
import Bg from '../../static/img/SL-092619-23740-28.jpg';

const Contitle = () => {
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
        <h5 className="card-title" id="painel1-title" style={{ opacity: textOpacity }}>Política de Privacidade</h5>
      </div>
      
    </div>
  );
};

export default Contitle;