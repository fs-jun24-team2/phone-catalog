import { FavouritesList } from '@/modules/FavouritesPage/components/FavouritesList';
import styles from './Dashboard.module.scss';
import { selectFavourites } from '@/features/favouritesSlice';
import { useAppSelector } from '@/app/hooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import vitalii from '/images/users/Vitalii.jpeg';

export const Dashboard = () => {
  const { t } = useTranslation();
  const items = useAppSelector(selectFavourites);

  const userInfo = {
    name: 'Vitalii Kravchuk',
    email: 'vitalii@mate.com',
    dateOfBirth: 'May 11, 1984',
    phone: '(096) 123-45-67',
    avatarUrl: vitalii,
  };

  const balance = '$350.00';

  const purchases = [
    { date: '2023-09-01', price: '$120.00', item: 'Laptop' },
    { date: '2023-08-15', price: '$50.00', item: 'Headphones' },
    { date: '2023-08-05', price: '$20.00', item: 'Mouse' },
  ];

  const [showUserInfo, setShowUserInfo] = useState(true);
  const [showBalance, setShowBalance] = useState(true);
  const [showFavourites, setShowFavourites] = useState(true);
  const [showPurchases, setShowPurchases] = useState(true);

  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['user-balance-container']}>
        <div className={styles['user-info-section']}>
          <h2
            onClick={() => setShowUserInfo(!showUserInfo)}
            className={styles['section-header']}
          >
            {t('dashboard.userInformation')}
          </h2>
          <div
            className={`${styles['section-content']} ${showUserInfo ? styles['open'] : ''}`}
          >
            <div className={styles['user-info']}>
              <div className={styles['user-avatar']}>
                <img
                  src={userInfo.avatarUrl}
                  alt={`${userInfo.name}'s avatar`}
                />
              </div>
              <div className={styles['user-details']}>
                <p>
                  <strong>{t('dashboard.name')}:</strong> {userInfo.name}
                </p>
                <p>
                  <strong>{t('dashboard.email')}:</strong> {userInfo.email}
                </p>
                <p>
                  <strong>{t('dashboard.dateOfBirth')}:</strong>{' '}
                  {userInfo.dateOfBirth}
                </p>
                <p>
                  <strong>{t('dashboard.phone')}:</strong> {userInfo.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['balance-section']}>
          <h2
            onClick={() => setShowBalance(!showBalance)}
            className={styles['section-header']}
          >
            {t('dashboard.balance')}
          </h2>
          <div
            className={`${styles['section-content']} ${showBalance ? styles['open'] : ''}`}
          >
            <div className={styles['balance-amount']}>{balance}</div>
          </div>
        </div>
      </div>

      <div className={styles['section']}>
        <h2
          onClick={() => setShowFavourites(!showFavourites)}
          className={styles['section-header']}
        >
          {t('dashboard.yourFavourites')}
        </h2>
        <div
          className={`${styles['section-content']} ${showFavourites ? styles['open'] : ''}`}
        >
          <FavouritesList items={items} />
        </div>
      </div>

      <div className={styles['section']}>
        <h2
          onClick={() => setShowPurchases(!showPurchases)}
          className={styles['section-header']}
        >
          {t('dashboard.latestPurchases')}
        </h2>
        <div
          className={`${styles['section-content']} ${showPurchases ? styles['open'] : ''}`}
        >
          <div className={styles['purchases-list']}>
            {purchases.map((purchase, index) => (
              <div key={index} className={styles['purchase-item']}>
                <div className={styles['purchase-date']}>{purchase.date}</div>
                <div className={styles['purchase-price']}>{purchase.price}</div>
                <div className={styles['purchase-item-name']}>
                  {purchase.item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
