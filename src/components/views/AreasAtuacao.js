import React from 'react';
import '../views/areasatuacao.css';

const AreasAtuacao = () => {
  return (
    <div id='areasAt' className="card">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="1">
            <div className="card-body">
              <h5 className="card-title">Direito Ambiental</h5>
              <p className="card-text">
                Atuação em questões relacionadas ao meio ambiente, licenciamento ambiental, recursos hídricos, proteção ambiental, entre outros.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="1">
            <div className="card-body">
              <h5 className="card-title">Direito de Contratos</h5>
              <p className="card-text">
                Assessoria jurídica na elaboração, análise e negociação de contratos, visando garantir a segurança e os direitos das partes envolvidas.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="1">
            <div className="card-body">
              <h5 className="card-title">Cobrança Judicial e Extrajudicial</h5>
              <p className="card-text">
                Representação e acompanhamento de processos de cobrança, incluindo cobranças extrajudiciais e judiciais, buscando soluções eficientes para a recuperação de créditos.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="1">
            <div className="card-body">
              <h5 className="card-title">Direito Imobiliário</h5>
              <p className="card-text">
                Orientação jurídica em transações imobiliárias, contratos de locação, regularização fundiária, questões condominiais, entre outros.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="1">
            <div className="card-body">
              <h5 className="card-title">Direito Societário</h5>
              <p className="card-text">
                Assessoria em constituição de sociedades, elaboração de contratos sociais, reorganizações societárias, fusões e aquisições, entre outros.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="1">
            <div className="card-body">
              <h5 className="card-title">Direito Sucessório</h5>
              <p className="card-text">
                Planejamento sucessório, inventários, testamentos, partilhas de bens, acompanhamento de processos judiciais relacionados a heranças.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasAtuacao;
