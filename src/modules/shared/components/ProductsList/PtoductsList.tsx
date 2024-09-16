//import styles from './ProductsList.module.scss';

import { ProductCard } from '../ProductCard';
import { Phone } from '../../../../types/Phone';

export const ProductsList = () => {
  return <ProductCard product={{} as Phone} />;
};
