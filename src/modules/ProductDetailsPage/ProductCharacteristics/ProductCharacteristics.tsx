import { useTranslation } from 'react-i18next';
import styles from './ProductCharacteristics.module.scss';
import { Product } from '@/types/Product';
import { AggregateProduct } from '@/types/AggregateProduct';
import { Specs } from '@/types/Specs';
import { formatValueWithUnit } from '@/utils/formatValueWithUnit';
import { ProductsCategory } from '@/types/ProductsCategory';
import { AddToCard } from '@/modules/shared/components/AddToCard/AddToCard';
import { AddToFavourites } from '@/modules/shared/components/AddToFavourites';
import { CapacityOptions } from './CapacityOptions';
import { ColorOptions } from './СolorOptions';
import { isAggregateProduct } from '@/modules/shared/helpers/isAggregateProduct';
import { useAppSelector } from '@/app/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props<T> = {
  product: T;
  category: ProductsCategory;
};

export const ProductCharacteristics = <T extends Product | AggregateProduct>({
  product,
  category,
}: Props<T>) => {
  const { t } = useTranslation();
  const {
    id,
    priceRegular,
    priceDiscount,
    resolution,
    processor,
    screen,
    ram,
    colorsAvailable,
    capacityAvailable,
  } = isAggregateProduct(product)
    ? {
        id: product.itemId,
        priceRegular: product.fullPrice,
        priceDiscount: product.price,
        screen: product.screen,
        ram: product.ram,
        resolution: '',
        processor: '',
        colorsAvailable: [product.color],
        capacityAvailable: [product.capacity],
      }
    : product;

  const products = useAppSelector(state => state.products[category]);

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
  const [color, setColor] = useState(product.color);
  const [capacity, setCapacity] = useState(product.capacity);
  const price = priceDiscount ? priceDiscount : priceRegular;
  const nameSpaceId = products[id].namespaceId;
  const navigate = useNavigate();

  useEffect(() => {
    if (color !== product.color || capacity !== product.capacity) {
      const formatColor = color.split(' ').join('-');
      const currentCapacity = capacity.toLowerCase();
      const newPath = nameSpaceId + '-' + currentCapacity + '-' + formatColor;
      navigate(`/${category}/${newPath}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capacity, color]);

  return (
    <div>
      <div className={styles['product-charact__options']}>
        <ColorOptions
          colors={colorsAvailable}
          onSetColor={setColor}
          currentColor={color}
          id={id}
        />

        <div className={styles['product-charact__devider']}></div>

        <CapacityOptions
          capacities={capacityAvailable}
          category={category}
          onSetCapacity={setCapacity}
          currentCapacity={capacity}
        />

        <div className={styles['product-charact__devider']}></div>
      </div>

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
          product={product}
          category={category}
          id={id}
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
