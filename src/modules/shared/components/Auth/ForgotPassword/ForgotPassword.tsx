import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.scss';

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Password reset request sent for:', email);

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div
      className={`${styles.forgot_password_container} ${isDarkTheme ? styles.dark_theme : ''}`}
    >
      <div className={styles.auth_card}>
        <h2>{t('auth.forgotPassword')}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label>{t('auth.email')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.form_button}>
            {t('auth.sendResetLink')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
