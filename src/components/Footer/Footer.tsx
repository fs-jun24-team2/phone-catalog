//import React from 'react';
import './Footer.scss';

export const Footer = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <img src="#" alt="Logo" />
      <div className="footer__link">
        <div>Github</div>
        <div>Contacts</div>
        <div>rights</div>
      </div>
      <div className="footer__go-back-btn" onClick={scrollToSection}>
        <div>Back to top</div>
        <img
          className="footer__go-back-btn__icon"
          src="../images/icons/stroke-up.svg"
        />
      </div>
    </footer>
  );
};
