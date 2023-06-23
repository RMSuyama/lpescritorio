import React from 'react';
import '../common/newsletter.css';


const Newsletter = () => {
  return (
    <div className="card social-card">
        <h6>NEWSLETTER</h6>
        <h5>Se inscreva em nossa Newsletter e receba atualizações e notícias exclusivas!</h5>
        <div class="mb-2">
            <label for="exampleFormControlTextarea1" class="form-label">Nome</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
       </div>
        <button type="button" className="btn btn-outline-secondary">Inscrever</button>
    </div>
  );
};

export default Newsletter;
