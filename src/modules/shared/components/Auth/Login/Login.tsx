import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const isAuthenticated = true;
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  };

  return (
    <div className={styles['auth-container']}>
      <div className={styles['auth-card']}>
        <h2>{t('auth.login')}</h2>
        <form onSubmit={handleLogin}>
          <div className={styles['form-group']}>
            <label>{t('auth.email')}</label>
            <input type="email" placeholder={t('auth.email')} />
          </div>
          <div className={styles['form-group']}>
            <label>{t('auth.password')}</label>
            <input type="password" placeholder={t('auth.password')} />
          </div>
          <button type="submit" className={styles['auth-btn']}>
            {t('auth.login')}
          </button>
        </form>
        <Link to="/forgot-password" className={styles['auth-link']}>
          {t('auth.forgotPassword')}
        </Link>
        <div className={styles['form-footer']}>
          {t('auth.noAccount')} <Link to="/register">{t('auth.signup')}</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
