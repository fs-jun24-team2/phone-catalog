import { useTranslation } from 'react-i18next';
import styles from './ProductCharacteristics.module.scss';
import { Product } from '@/types/Product';
import { AggregateProduct } from '@/types/AggregateProduct';
import { Specs } from '@/types/Specs';
import { formatValueWithUnit } from '@/utils/formatValueWithUnit';
import { ProductsCategory } from '@/types/ProductsCategory';
import { AddToCard } from '@/modules/shared/components/AddToCard/AddToCard';
import { AddToFavourites } from '@/modules/shared/components/AddToFavourites';

type Props<T> = {
  product: T;
  category: ProductsCategory;
};

export const ProductCharacteristics = <T extends Product | AggregateProduct>({
  product,
  category,
}: Props<T>) => {
  const { t } = useTranslation();
  const isAggregateProduct = (
    product: Product | AggregateProduct,
  ): product is AggregateProduct => {
    return 'itemId' in product && typeof product.itemId === 'string';
  };

  const {
    id,
    priceRegular,
    priceDiscount,
    resolution,
    processor,
    screen,
    ram,
  } = isAggregateProduct(product)
    ? {
        id: product.itemId,
        priceRegular: product.fullPrice,
        priceDiscount: product.price,
        screen: product.screen,
        ram: product.ram,
        resolution: '',
        processor: '',
      }
    : product;

  const specs = [
    {
      name: t(Specs.Screen),
      value: screen,
    },
    {
      name: t(Specs.Resolution),
      value: resolution,
    },
    {
      name: t(Specs.Processor),
      value: processor,
    },
    {
      name: t(Specs.RAM),
      value: ram,
    },
  ];

  const price = priceDiscount ? priceDiscount : priceRegular;

  return (
    <div>
      <div className={styles['product-charact__devider']}></div>

      <div className={styles['product-charact__prices-container']}>
        <p className={styles['product-charact__price-discount']}>
          ${priceDiscount}
        </p>

        <p className={styles['product-charact__price-regular']}>
          ${priceRegular}
        </p>
      </div>

      <div className={styles['product-charact__button-container']}>
        <AddToCard id={id} price={price} category={category} />
        <AddToFavourites
          className={styles['product-charact__button-favourites']}
        />
      </div>

      <div className={styles['product-charact__specs-container']}>
        {specs.map(({ name, value }) => (
          <div key={name} className={styles['product-charact__spec-container']}>
            <p className={styles['product-charact__spec-name']}>{name}</p>
            <p className={styles['product-charact__spec-value']}>
              {formatValueWithUnit(value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
