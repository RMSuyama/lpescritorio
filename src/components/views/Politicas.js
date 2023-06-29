import React from 'react';
import '../views/Politicas.css';

const PoliticaDados = () => {
  return (
    <div id="main-card" className="card">
      {/* <h2 id="policy-heading" className="policy-heading">Política de Dados</h2> */}
      <div className="card-body">
        <h4 className="paragraph-title">Visão geral</h4>
        <p className="card-text">
          Nós, do escritório de advocacia Manzo & Suyama, valorizamos a privacidade e a proteção de dados dos nossos clientes. Nesta política, descrevemos como coletamos, usamos, armazenamos e protegemos as informações fornecidas por você ao utilizar nosso site e serviços.
        </p>

        <h4 className="paragraph-title">Coleta de Dados</h4>
        <p className="card-text">
          Coletamos dados pessoais apenas quando fornecidos por você de forma voluntária, como ao preencher formulários de contato ou ao se inscrever em nossa newsletter. Os dados coletados podem incluir nome, endereço de e-mail, número de telefone e outras informações relevantes para a prestação dos nossos serviços.
        </p>

        <h4 className="paragraph-title">Uso e Armazenamento de Dados</h4>
        <p className="card-text">
          Utilizamos os dados coletados apenas para os fins específicos informados no momento da coleta, como para entrar em contato, enviar informações relevantes sobre nossos serviços ou processos jurídicos, e fornecer atualizações por meio da newsletter, caso você tenha consentido em recebê-la. Garantimos que seus dados serão armazenados de forma segura e confidencial. Não compartilharemos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou com seu consentimento prévio.
        </p>

        <h4 className="paragraph-title">Opções de Consentimento e Cancelamento</h4>
        <p className="card-text">
          Respeitamos sua liberdade de escolha e oferecemos a opção de cancelar o recebimento de comunicações por e-mail a qualquer momento. Você pode solicitar a exclusão dos seus dados dos nossos registros enviando um e-mail para contato@manzosuyama.com. Salientamos que, ao utilizar nosso site e fornecer suas informações, você concorda com os termos desta política de dados.
        </p>
      </div>
    </div>
  );
};

export default PoliticaDados;
