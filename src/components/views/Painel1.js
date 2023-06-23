import React from 'react';
import '../views/Painel1.css';
import Bg from '../../static/img/cup-of-coffee-1280537_1280.jpg';

const Painel1 = () => {
  return (
    <div className="card" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(100%)', opacity: 0.8 }}>
      <div id="painel1">
      <h1 class="display-1">
        MANZO & SUYAMA <br/> Advocacia e Consultoria Jurídica</h1>

      </div>
    </div>
  );
};

export default Painel1;
