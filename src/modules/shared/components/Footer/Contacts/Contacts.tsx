import { useEffect, useState } from 'react';
import styles from './Contacts.module.scss';
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
  const { t } = useTranslation();

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
  }, []);

  return (
    <div
      className={`${styles['contacts-container']} ${isDarkTheme ? styles.dark_theme : ''}`}
    >
      <div className={styles.contacts}>
        <h2>{t('contact_us')}</h2>
        <p>{t('email')}: support@mate.com</p>
        <p>{t('phone')}: +123 456 7890</p>
        <p>{t('address')}: Bohdana Khmel'nyts'koho, 51a, Kyiv, 02000</p>
      </div>

      <div className={styles.map}>
        <h2>{t('our_location')}</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6342503643946!2d30.498227876557078!3d50.44791297159164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefaf1ebc81f%3A0xed482dcdab9f23ad!2sMate%20academy!5e0!3m2!1sru!2sua!4v1727258984794!5m2!1sru!2sua"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
