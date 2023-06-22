import React from 'react';
import '../views/painel.css';
import Emp from '../../static/img/planejamento.jpg'
import Plan from '../../static/img/Claw.jpg'
import Cont from '../../static/img/plan.jpg'
import Prazo from '../../static/img/prazo.jpg'

const Painel = () => {
  return (
    <div className="card">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={Emp} className="card-img-top" alt="Imagem do serviço"></img>
            <div className="card-body">
              <h5 className="card-title">Gerenciamento de Empresas</h5>
              <p className="card-text">
                Cadastro, edição, exclusão e visualização detalhada de empresas cadastradas. Análise de impostos, geração de relatórios e gráficos.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Plan} className="card-img-top" alt="Imagem do serviço"></img>
            <div className="card-body">
              <h5 className="card-title">Planejamento Tributário</h5>
              <p className="card-text">
                Desenvolvimento de estratégias personalizadas de planejamento tributário, simulação de cenários fiscais e consulta de regulamentações.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Prazo} className="card-img-top" alt="Imagem do serviço"></img>
            <div className="card-body">
              <h5 className="card-title">Monitoramento de Prazos e Obrigações</h5>
              <p className="card-text">
                Acompanhamento de prazos de pagamentos de impostos, notificações e lembretes automáticos.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Cont} className="card-img-top" alt="Imagem do serviço"></img>
            <div className="card-body">
              <h5 className="card-title">Integração com Contadores</h5>
              <p className="card-text">
                Compartilhamento de informações e documentos com o contador, colaboração em tempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painel;
