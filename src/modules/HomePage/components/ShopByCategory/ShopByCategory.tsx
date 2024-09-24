import { useAppSelector } from '@/app/hooks';
import styles from './ShopByCategory.module.scss';
import { selectProducts } from '@/features/productsSlice';
import { useCategoriesData } from '../../../../hooks.ts/useCategoriesData';
import { Link } from 'react-router-dom';

export const ShopByCategory = () => {
  const products = useAppSelector(selectProducts);
  const phoneAmount = Object.keys(products.phones).length;
  const tabletsAmount = Object.values(products.tablets).length;
  const accessoriesAmount = Object.values(products.accessories).length;

  const categories = useCategoriesData({
    phoneAmount,
    tabletsAmount,
    accessoriesAmount,
  });

  return (
    <>
      <h2 className={`${styles['style-h2']} ${styles['category-high-title']} `}>
        Shop by category
      </h2>

      <section className={styles['all-categories']}>
        {categories.map((category, ind) => (
          <div className={styles['category']} key={ind}>
            <Link to={category.path}>
              <img
                src={category.img}
                className={styles['all-categories__picture']}
              />
              <div
                className={`${styles['style-h4']} ${styles['all-categories__title']} `}
              >
                {category.title}
              </div>
            </Link>

            <div
              className={`${styles['body-text']} ${styles['all-categories__amount']} `}
            >
              {category.amount} models
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
