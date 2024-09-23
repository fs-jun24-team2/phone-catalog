import React from 'react';
import styles from './PopupModal.module.scss';
import { useTranslation } from 'react-i18next';

interface PopupModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}



export const PopupModal: React.FC<PopupModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
    const { t } = useTranslation();
  return (
    <div className={styles.popupOverlay}>
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
