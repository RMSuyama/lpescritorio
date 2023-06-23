import React from 'react';
import '../views/areasatuacao.css';
import ImgAmbiental from '../../static/img/desk-593327_1280.jpg';
import ImgContratos from '../../static/img/cup-of-coffee-1280537_1280.jpg';
import ImgCobranca from '../../static/img/cup-of-coffee-1280537_1280.jpg';
import ImgImobiliario from '../../static/img/desk-593327_1280.jpg';
import ImgSocietario from '../../static/img/desk-593327_1280.jpg';
import ImgSucessorio from '../../static/img/cup-of-coffee-1280537_1280.jpg';

const AreasAtuacao = () => {
  return (
    <div className="card">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={ImgAmbiental} className="card-img-top" alt="Imagem da área de atuação" />
            <div className="card-body">
              <h5 className="card-title">Direito Ambiental</h5>
              <p className="card-text">
                Atuação em questões relacionadas ao meio ambiente, licenciamento ambiental, recursos hídricos, proteção ambiental, entre outros.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ImgContratos} className="card-img-top" alt="Imagem da área de atuação" />
            <div className="card-body">
              <h5 className="card-title">Direito de Contratos</h5>
              <p className="card-text">
                Assessoria jurídica na elaboração, análise e negociação de contratos, visando garantir a segurança e os direitos das partes envolvidas.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ImgCobranca} className="card-img-top" alt="Imagem da área de atuação" />
            <div className="card-body">
              <h5 className="card-title">Cobrança Judicial e Extrajudicial</h5>
              <p className="card-text">
                Representação e acompanhamento de processos de cobrança, buscando soluções eficientes para a recuperação de créditos.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ImgImobiliario} className="card-img-top" alt="Imagem da área de atuação" />
            <div className="card-body">
              <h5 className="card-title">Direito Imobiliário</h5>
              <p className="card-text">
                Orientação jurídica em transações imobiliárias, contratos de locação, regularização fundiária, questões condominiais, entre outros.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ImgSocietario} className="card-img-top" alt="Imagem da área de atuação" />
            <div className="card-body">
              <h5 className="card-title">Direito Societário</h5>
              <p className="card-text">
                Assessoria em constituição de sociedades, elaboração de contratos sociais, reorganizações societárias, fusões e aquisições, entre outros.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ImgSucessorio} className="card-img-top" alt="Imagem da área de atuação" />
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
