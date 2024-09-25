import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import footer_logo from '/images/original/footer/logo.svg';
import footer_dark_logo from '/images/original/footer/logoblack.svg';
import { scrollToTop } from '../../helpers/scrollToTop';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();
  const links = [
    {
      href: 'https://github.com/fs-jun24-team2/phone-catalog',
      label: 'Github',
    },
    {
      href: 'https://github.com/fs-jun24-team2/phone-catalog',
      label: t('contacts'),
    },
    {
      href: 'https://github.com/fs-jun24-team2/phone-catalog',
      label: t('rights'),
    },
  ];
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  });

  return (
    <footer>
      <div
        className={`${styles['footer']} ${isDarkTheme ? styles['footer-dark'] : ''}`}
      >
        <img src={isDarkTheme ? footer_dark_logo : footer_logo} alt="Logo" />
        <div className={styles['footer__link']}>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles['footer__go-back-btn']} onClick={scrollToTop}>
          <div>{t('back_to_top')}</div>
          <div className={styles['footer__go-back-btn__icon']}></div>
        </div>
      </div>
    </footer>
  );
};
