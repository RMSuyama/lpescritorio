import React from 'react';
import Rafa from '../../static/img/1670379073391.jpg';
import Andre from '../../static/img/282226047_499140771959049_7884429333635122828_n.jpg';

const ProfissionaisL = () => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Rafa} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">Rafael Moreira Suyama</h2>
              <h5 className="card-title">Biografia</h5>
              <p className="card-text">
                Advogado OAB/SP nº 441.474 <br/>
                Bacharel em Direito – Centro Universitário do Vale do Ribeira- UNIVR/SP<br/>
                Pós-Graduando em Controladoria Jurídica – LEGALE.
                </p>
              <p className="card-text">
              <h5 className="card-title">Atuação Profissional</h5>
                Sócio do escritório Manzo & Suyama - Advocacia e Consultoria Jurídica, com sede em São Paulo.
             </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Andre Manzo</h2>
              <h5 className="card-title">Biografia</h5>
              <p className="card-text">Advogado OAB/SP nº 441.474 <br/>
                Bacharel em Direito – Centro Universitário do Vale do Ribeira- UNIVR/SP <br/> Especialização em Advocacia Corporativa pela Fundação Escola Superior do Ministério Público (FMP) <br/>
              Mestrando pela FADISP
            </p>
              <p className="card-text">
              <h5 className="card-title">Atuação Profissional</h5>
               Sócio do escritório Manzo & Suyama - Advocacia e Consultoria Jurídica, com sede em São Paulo.
             </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Andre} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfissionaisL;
