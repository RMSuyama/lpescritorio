import React from 'react';
import '../views/painelTribut.css';
import New from '../../static/img/file-earmark-plus-fill.svg';
import Edit from '../../static/img/pencil-square.svg';
import Search from '../../static/img/search.svg'



const PainelTribut = () => {
  return (
    <div id="paineltributus" className="card">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={Search} className="img-thumbnail" alt="Imagem do serviço" />
            <div className="card-body">
              <h5 className="card-title">Buscar Cliente</h5>
              <p className="card-text">
                Realize uma busca detalhada para encontrar informações sobre um cliente existente.
              </p>
              <a href="/busca" className="btn btn-primary">Ir para Busca</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={New} className="img-thumbnail"  alt="Imagem do serviço" />
            <div className="card-body">
              <h5 className="card-title">Cadastrar Novo Cliente</h5>
              <p className="card-text">
                Realize o cadastro de um novo cliente com todas as informações necessárias.
              </p>
              <a href="/cadastro" className="btn btn-primary">Ir para Cadastro</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Edit} className="img-thumbnail" alt="Imagem do serviço" />
            <div className="card-body">
              <h5 className="card-title">Retificação de Dados</h5>
              <p className="card-text">
                Realize a retificação de informações de um cliente previamente cadastrado.
              </p>
              <a href="/retificacao" className="btn btn-primary">Ir para Retificação</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelTribut;
