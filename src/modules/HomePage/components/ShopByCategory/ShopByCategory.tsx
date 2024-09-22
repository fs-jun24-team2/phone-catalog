import { useAppSelector } from '@/app/hooks';
import styles from './ShopByCategory.module.scss';
import { selectProducts } from '@/features/productsSlice';
import { getCategoriesData } from '../../helpers/getCategoriesData';
import { Link } from 'react-router-dom';

export const ShopByCategory = () => {
  const products = useAppSelector(selectProducts);
  const phoneAmount = Object.keys(products.phones).length;
  const tabletsAmount = Object.values(products.tablets).length;
  const accessoriesAmount = Object.values(products.accessories).length;

  const categories = getCategoriesData(
    phoneAmount,
    tabletsAmount,
    accessoriesAmount,
  );

  return (
    <>
      <h2 className={`${styles['style-h2']} ${styles['category-high-title']} `}>
        Shop by category
      </h2>

      <section className={styles['category']}>
        {categories.map((category, ind) => (
          <div key={ind}>
            <Link to={category.path}>
              <img src={category.img} className={styles['category__picture']} />
            </Link>
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
