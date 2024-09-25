import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PopupSubscribe.module.scss';
import { SUBSCRIBE_DELAY } from '@/constants';

export const PopupSubscribe: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'popup_subscribe' });
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    let timer: number | undefined;
    if (!localStorage.getItem('subscribedEmail')) {
      timer = window.setTimeout(() => {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }, SUBSCRIBE_DELAY);
    }
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);

    document.body.style.overflow = '';
    localStorage.setItem('subscribedEmail', 'not_subscribe');
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage(t('emptyEmailError'));
      setIsValid(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage(t('invalidEmailError'));
      setIsValid(false);
      return;
    }

    localStorage.setItem('subscribedEmail', email);
    setIsVisible(false);
    document.body.style.overflow = '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorMessage('');
    setIsValid(true);
  };

  if (!isVisible) {
    return null;
  }
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <h2 className={styles.title}>{t('title')}</h2>
        <p>{t('message')}</p>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="text"
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={handleEmailChange}
            className={`${styles.emailInput} ${!isValid ? styles.error : ''}`}
          />
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <p className={styles.hintMessage}>
            {t('emailHint', { example: 'user@example.com' })}
          </p>
          <button type="submit">{t('submitButton')}</button>
        </form>
      </div>
    </div>
  );
};

export default PopupSubscribe;
