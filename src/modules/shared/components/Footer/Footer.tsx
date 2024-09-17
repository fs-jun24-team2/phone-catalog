import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container foo">
        <img src="images/footer/logo.svg" alt="Logo" />
        <div className={styles['foo__link']}>
          <a
            href="https://github.com/fs-jun24-team2/phone-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/fs-jun24-team2/phone-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacts
          </a>
          <a
            href="https://github.com/fs-jun24-team2/phone-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rights
          </a>
        </div>
        <div className={styles['foo__go-back-btn']} onClick={scrollToSection}>
          <div>Back to top</div>
          <div className={styles['foo__go-back-btn__icon']}></div>
        </div>
      </div>
    </footer>
  );
};
