import '../common/newsletter.css';
import React, { useState } from 'react';
import { firestore } from '../../config/firebase';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    const subscriber = {
      name,
      email,
    };

    console.log('Dados do assinante:', subscriber);

    firestore
      .collection('Subscribers')
      .add(subscriber)
      .then(() => {
        console.log('Dados enviados com sucesso!');
        setSuccessMessage('Enviado com sucesso!');

        setName('');
        setEmail('');

        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

  return (
    <div className="card social-card">
      <h6>NEWSLETTER</h6>
      <h5>Se inscreva em nossa Newsletter e receba atualizações e notícias exclusivas!</h5>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <div className="mb-2">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Nome
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Endereço de e-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nome@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit}>
        Inscrever
      </button>
    </div>
  );
};

export default Newsletter;
