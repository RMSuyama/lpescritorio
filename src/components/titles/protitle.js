import React, { useEffect, useState } from 'react';
import '../titles/protitle.css';

const Protitle = () => {
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
 
      <div>
        <h5 className="display-6" style={{ fontFamily: 'Spectral, sans-serif', textAlign: 'center', padding: '6vw', opacity: textOpacity }}>Profissionais</h5>
      </div>

      
    </div>
  );
};

export default Protitle;