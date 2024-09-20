import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import footer_logo from '/images/original/footer/logo.svg';

export const Footer = () => {
  const { t } = useTranslation();
  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container foo">
        <img src={footer_logo} alt="Logo" />
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
            {t('contacts')}
          </a>
          <a
            href="https://github.com/fs-jun24-team2/phone-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('rights')}
          </a>
        </div>
        <div className={styles['foo__go-back-btn']} onClick={scrollToSection}>
          <div>{t('back_to_top')}</div>
          <div className={styles['foo__go-back-btn__icon']}></div>
        </div>
      </div>
    </footer>
  );
};
