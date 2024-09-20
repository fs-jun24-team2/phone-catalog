import { useAppSelector } from '@/app/hooks';
//import classNames from 'classnames';
import styles from './ShopByCategory.module.scss';

export const ShopByCategory = () => {
  const products = useAppSelector(state => state.products);
  const phoneAmount = Object.keys(products.phones).length;
  const tabletsAmount = Object.values(products.tablets).length;
  const accessoriesAmount = Object.values(products.accessories).length;

  const categories = [
    {
      img: 'img/category-phones.png',
      title: 'Mobile phones',
      amount: phoneAmount,
      styleBg: 'mobiles',
    },
    {
      img: 'img/category-tablets.png',
      title: 'Tablets',
      amount: tabletsAmount,
      styleBg: 'tablets',
    },
    {
      img: 'img/category-accessories.png',
      title: 'Accessories',
      amount: accessoriesAmount,
      styleBg: 'accessories',
    },
  ];

  return (
    <>
      <h2 className={`${styles['style-h2']} ${styles['category-high-title']} `}>Shop by category</h2>
      <section className={styles['category']}>
        {categories.map(category => (
          <div>
            <img src={category.img} className={styles['category__picture']} />
            <div
              className={`${styles['style-h4']} ${styles['category__title']} `}
            >
              {category.title}
            </div>
            <div
              className={`${styles['body-text']} ${styles['category__amount']} `}
            >
              {category.amount} models
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
