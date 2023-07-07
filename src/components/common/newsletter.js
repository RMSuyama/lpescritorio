import '../common/newsletter.css';
import React, { useState } from 'react';
import { firestore } from '../../config/firebase';
import ReCAPTCHA from 'react-google-recaptcha';

// Importe o objeto firebaseConfig do arquivo config/firebase
import { firebaseConfig } from '../../config/firebase';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      console.log('Por favor, confirme que você não é um robô.');
      return;
    }

    const subscriber = {
      name,
      email,
    };

    firestore
      .collection('Subscribers')
      .add(subscriber)
      .then(() => {
        console.log('Dados enviados com sucesso!');
        setName('');
        setEmail('');
        setRecaptchaValue('');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="card social-card">
      <h6>NEWSLETTER</h6>
      <h5>Se inscreva em nossa Newsletter e receba atualizações e notícias exclusivas!</h5>
      <div className="mb-2">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Nome</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">Endereço de e-mail</label>
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
      <ReCAPTCHA
        sitekey={firebaseConfig.recaptchaSiteKey}
        onChange={handleRecaptchaChange}
      />
      <button type="submit" className="btn btn-outline-secondary">Inscrever</button>
    </form>
  );
};

export default Newsletter;
  