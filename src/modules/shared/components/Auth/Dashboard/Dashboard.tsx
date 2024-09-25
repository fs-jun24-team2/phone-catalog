import { FavouritesList } from '@/modules/FavouritesPage/components/FavouritesList';
import styles from './Dashboard.module.scss';
import { selectFavourites } from '@/features/favouritesSlice';
import { useAppSelector } from '@/app/hooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import vitalii from '/images/users/Vitalii.jpeg';
import { useDrag, useDrop, DndProvider, DragSourceMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getPurchaseHistory } from '@/modules/shared/helpers/getPurchaseHistory';

const ITEM_TYPE = 'section';

interface Section {
  id: string;
  component: 'UserInfo' | 'Balance' | 'Favourites' | 'Purchases';
  isOpen: boolean;
}

const Dashboard = () => {
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

  const purchases = getPurchaseHistory();

  const [sections, setSections] = useState<Section[]>([
    { id: 'userInfo', component: 'UserInfo', isOpen: true },
    { id: 'balance', component: 'Balance', isOpen: true },
    { id: 'favourites', component: 'Favourites', isOpen: true },
    { id: 'purchases', component: 'Purchases', isOpen: true },
  ]);

  const moveSection = (dragIndex: number, hoverIndex: number) => {
    const updatedSections = [...sections];
    const [draggedSection] = updatedSections.splice(dragIndex, 1);
    updatedSections.splice(hoverIndex, 0, draggedSection);
    setSections(updatedSections);
  };

  const toggleSection = (id: string) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section,
      ),
    );
  };

  const DraggableSection = ({
    section,
    index,
  }: {
    section: Section;
    index: number;
  }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ITEM_TYPE,
      item: { index },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    const [, drop] = useDrop({
      accept: ITEM_TYPE,
      hover: (draggedItem: { index: number }) => {
        if (draggedItem.index !== index) {
          moveSection(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });

    const renderComponent = () => {
      switch (section.component) {
        case 'UserInfo':
          return (
            <div className={styles['user-info-section']}>
              <div
                className={styles['section-header']}
                onClick={() => toggleSection(section.id)}
              >
                {t('dashboard.userInformation')}
              </div>
              <div
                className={`${styles['section-content']} ${section.isOpen ? styles['open'] : ''}`}
              >
                {section.isOpen && (
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
                        <strong>{t('dashboard.email')}:</strong>{' '}
                        {userInfo.email}
                      </p>
                      <p>
                        <strong>{t('dashboard.dateOfBirth')}:</strong>{' '}
                        {userInfo.dateOfBirth}
                      </p>
                      <p>
                        <strong>{t('dashboard.phone')}:</strong>{' '}
                        {userInfo.phone}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        case 'Balance':
          return (
            <div className={styles['balance-section']}>
              <div
                className={styles['section-header']}
                onClick={() => toggleSection(section.id)}
              >
                {t('dashboard.balance')}
              </div>
              <div
                className={`${styles['section-content']} ${section.isOpen ? styles['open'] : ''}`}
              >
                {section.isOpen && (
                  <div className={styles['balance-amount']}>{balance}</div>
                )}
              </div>
            </div>
          );
        case 'Favourites':
          return (
            <div className={styles['section']}>
              <div
                className={styles['section-header']}
                onClick={() => toggleSection(section.id)}
              >
                {t('dashboard.yourFavourites')}
              </div>
              <div
                className={`${styles['section-content']} ${section.isOpen ? styles['open'] : ''}`}
              >
                {section.isOpen && <FavouritesList items={items} />}
              </div>
            </div>
          );
        case 'Purchases':
          return (
            <div className={styles['section']}>
              <div
                className={styles['section-header']}
                onClick={() => toggleSection(section.id)}
              >
                {t('dashboard.latestPurchases')}
              </div>
              <div
                className={`${styles['section-content']} ${section.isOpen ? styles['open'] : ''}`}
              >
                {section.isOpen && (
                  <div className={styles['purchases-list']}>
                    {purchases.map((purchase, index) => (
                      <div key={index} className={styles['purchase-item']}>
                        <div className={styles['purchase-date']}>
                          {purchase.date}
                        </div>
                        <div className={styles['purchase-price']}>
                          {purchase.price}
                        </div>
                        <div className={styles['purchase-item-name']}>
                          {purchase.item}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div
        ref={node => drag(drop(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {renderComponent()}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles['dashboard-container']}>
        {sections.map((section, index) => (
          <DraggableSection key={section.id} section={section} index={index} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Dashboard;
