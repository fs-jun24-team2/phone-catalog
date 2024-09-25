import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import footer_logo from '/images/original/footer/logo.svg';
import { scrollToTop } from '../../helpers/scrollToTop';
import { useEffect, useState } from 'react';

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
        <img
          src={
            isDarkTheme
              ? footer_logo
              : '/public/images/original/footer/logo-black.svg'
          }
          alt="Logo"
        />
        <div className={styles['footer__link']}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
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
