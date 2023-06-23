import React from 'react';
import '../Footer/Footer.css';
import mala from '../../../static/img/briefcase-fill.svg';
import instagramLogo from '../../../static/img/logos/insta.svg';
import facebookLogo from '../../../static/img/logos/face.svg';
import linkedinLogo from '../../../static/img/logos/linked.svg';
import emailLogo from '../../../static/img/logos/email.svg';
import whatsappLogo from '../../../static/img/logos/whats.svg';



const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="logo">
              <img src={mala} alt="Manzo & Suyama" class="logo-img" />
            </div>
            <p class="tagline">Advocacia e Consultoria Jurídica</p>
          </div>
          <div class="col-md-3">
            <h4 class="footer-heading">Links</h4>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Serviços</a></li>
              <li><a href="/about">Sobre Nós</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 class="footer-heading">Redes Sociais</h4>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:example@example.com">
            <img src={emailLogo} alt="E-mail" className="social-icon" />
          </a>
          <a href="https://wa.me/xxxxxxxxxxx" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" className="social-icon" />
          </a>
          </div>
          <div class="col-md-3">
            <h4 class="footer-heading">Contato</h4>
            <ul class="footer-contact">
              <li><i class="fas fa-map-marker-alt"></i> Endereço: Rua Matheus Henrique de Carvalho, nº 61, Vila Ribeirópolis, Registro/SP</li>
              <li><i class="fas fa-phone"></i> Telefone: (12) 3456-7890</li>
              <li><i class="fas fa-envelope"></i> E-mail: contato@manzosuyama.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
