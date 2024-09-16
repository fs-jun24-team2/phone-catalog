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
          {/* тут будуть лінки */}
          <div>Github</div>
          <div>Contacts</div>
          <div>rights</div>
        </div>
        <div className={styles['foo__go-back-btn']} onClick={scrollToSection}>
          <div>Back to top</div>
          <div className={styles['foo__go-back-btn__icon']}></div>
        </div>
      </div>
    </footer>
  );
};
