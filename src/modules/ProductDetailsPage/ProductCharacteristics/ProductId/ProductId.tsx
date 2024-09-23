import styles from './ProductId.module.scss';

type Props = {
  id: string | number;
};

export const ProductId = ({ id }: Props) => {
  return (
    <div className={`${styles['style-small-text']} ${styles['product-id']}`}>
      {`ID: ${id}`}
    </div>
  );
};
