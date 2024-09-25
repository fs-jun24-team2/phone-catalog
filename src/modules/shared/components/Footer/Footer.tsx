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
      href: 'https://github.com/fs-jun24-team2/phone-catalog',
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
          {links.map((link, index) =>
            link.href.startsWith('http') ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link key={index} to={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </div>
        <div className={styles['footer__go-back-btn']} onClick={scrollToTop}>
          <div>{t('back_to_top')}</div>
          <div className={styles['footer__go-back-btn__icon']}></div>
        </div>
      </div>
    </footer>
  );
};
