import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PopupSubscribe.module.scss';
import { SUBSCRIBE_DELAY } from '@/constants';

export const PopupSubscribe: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(true); // Track email validity

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, SUBSCRIBE_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage(t('popup_subscribe.emptyEmailError'));
      setIsValid(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage(t('popup_subscribe.invalidEmailError'));
      setIsValid(false);
      return;
    }

    localStorage.setItem('subscribedEmail', email);
    setIsVisible(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorMessage('');
    setIsValid(true);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <h2 className={styles.title}>{t('popup_subscribe.title')}</h2>
        <p>{t('popup_subscribe.message')}</p>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="text"
            placeholder={t('popup_subscribe.emailPlaceholder')}
            value={email}
            onChange={handleEmailChange}
            className={`${styles.emailInput} ${!isValid ? styles.error : ''}`}
          />
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <p className={styles.hintMessage}>
            {t('popup_subscribe.emailHint', { example: 'user@example.com' })}
          </p>
          <button type="submit">{t('popup_subscribe.submitButton')}</button>
        </form>
      </div>
    </div>
  );
};
