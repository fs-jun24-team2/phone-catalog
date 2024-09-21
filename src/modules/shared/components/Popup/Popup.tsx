import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Popup.module.scss';

export const Popup: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div className={styles.popupOverlay}>
        <div className={styles.popupContent}>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
          <h2>{t('popup.title')}</h2>
          <p>{t('popup.message')}</p>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder={t('popup.emailPlaceholder')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">{t('popup.submitButton')}</button>
          </form>
        </div>
      </div>
    )
  );
};
