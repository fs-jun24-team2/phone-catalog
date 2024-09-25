import React, { useEffect } from 'react';
import styles from './PopupModal.module.scss';
import { useTranslation } from 'react-i18next';

interface PopupModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDarkTheme: boolean;
}

export const PopupModal: React.FC<PopupModalProps> = ({
  message,
  onConfirm,
  onCancel,
  isDarkTheme,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className={`${styles.popupOverlay} ${isDarkTheme ? styles.dark_theme : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.popupContent}>
        <button className={styles.closeIcon} onClick={onCancel}>
          &times;
        </button>
        <div className={styles.popupMessage}>{message}</div>
        <div className={styles.popupActions}>
          <button className={styles.popupButton} onClick={onConfirm}>
            {t('confirm')}
          </button>
          <button
            className={`${styles.popupButton} ${styles.cancel}`}
            onClick={onCancel}
          >
            {t('cancel')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
