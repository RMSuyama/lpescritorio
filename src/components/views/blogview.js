import React from 'react';
import "../views/blogview.css"
import img1 from '../../static/img/laptop-3196481_1280.jpg'
import img2 from '../../static/img/cup-of-coffee-1280537_1280.jpg'
import img3 from '../../static/img/planejamento.jpg'
import img4 from '../../static/img/prazo.jpg'
import img5 from '../../static/img/office-620822_1280.jpg'
import img6 from '../../static/img/planejamento.jpg'

const Blogview = () => {
  const posts = [
    {
      id: 1,
      title: "Aspectos importantes do direito empresarial",
      content: "Neste post, abordaremos os principais aspectos do direito empresarial, incluindo questões relacionadas à constituição de empresas, responsabilidade dos sócios e contratos comerciais.",
      updated: "Last updated 5 hours ago",
      image: img1,
      link: "/posts/1"
    },
    {
      id: 2,
      title: "Principais cláusulas em contratos comerciais",
      content: "Neste artigo, destacaremos as cláusulas mais importantes a serem consideradas ao elaborar contratos comerciais, fornecendo insights sobre a redação adequada e as proteções legais necessárias.",
      updated: "Last updated 1 day ago",
      image: img2,
      link: "/posts/2"
    },
    {
      id: 3,
      title: "Cobrança societária: procedimentos e melhores práticas",
      content: "Este post fornecerá informações valiosas sobre os procedimentos e as melhores práticas a serem adotadas para realizar a cobrança societária de forma eficiente, garantindo a saúde financeira da empresa.",
      updated: "Last updated 2 days ago",
      image: img3,
      link: "/posts/3"
    },
    {
      id: 4,
      title: "Planejamento sucessório: garantindo a proteção do patrimônio",
      content: "Descubra neste artigo a importância do planejamento sucessório para garantir a proteção do patrimônio familiar, incluindo estratégias legais para a transferência de bens e a redução de impostos.",
      updated: "Last updated 1 week ago",
      image: img4,
      link: "/posts/4"
    },
    {
      id: 5,
      title: "Aspectos legais do mercado imobiliário: guia para compradores",
      content: "Se você está pensando em adquirir um imóvel, este guia abrangente irá fornecer informações sobre os principais aspectos legais envolvidos na compra de imóveis, incluindo due diligence, contratos e financiamento.",
      updated: "Last updated 2 weeks ago",
      image: img5,
      link: "/posts/5"
    },
    {
      id: 6,
      title: "Direito ambiental: proteção do meio ambiente e responsabilidades",
      content: "Este post explorará as questões legais relacionadas à proteção do meio ambiente, discutindo responsabilidades ambientais, licenciamento e sustentabilidade nas práticas empresariais.",
      updated: "Last updated 1 month ago",
      image: img6,
      link: "/posts/6"
    },
  ];

  return (
    <div id="blogView" className="row row-cols-1 row-cols-md-3 g-4">
      {posts.map((post) => (
        <div className="col" key={post.id}>
          <div className="card h-100">
            <img src={post.image} className="card-img-top" alt="Post Image" />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">{post.updated}</small>
            </div>
            <a href={post.link} type="button" className="btn btn-outline-secondary">Ver mais</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogview;
