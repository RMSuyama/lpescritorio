import React from 'react';
import '../common/social.css';
import instagramLogo from '../../static/img/logos/insta.svg';
import facebookLogo from '../../static/img/logos/face.svg';
import linkedinLogo from '../../static/img/logos/linked.svg';
import emailLogo from '../../static/img/logos/email.svg';
import whatsappLogo from '../../static/img/logos/whats.svg';

const Social = () => {
  return (
    <div className="card social-card">
      <div className="card-body">
        <div className="social-icons">
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
          <a href="https://wa.me/5513996267989" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
