// Footer.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import footer_logo from '/images/original/footer/logo.svg';
import { scrollToTop } from '../../helpers/scrollToTop';

export const Footer = () => {
  const { t } = useTranslation();
  const links = [
    {
      href: 'https://github.com/fs-jun24-team2/phone-catalog',
      label: 'Github',
    },
    {
      href: '/contacts',
      label: t('contacts'),
    },
    {
      href: '/rights',
      label: t('rights'),
    },
  ];

  return (
    <footer>
      <div className={styles['footer']}>
        <img src={footer_logo} alt="Logo" />
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
