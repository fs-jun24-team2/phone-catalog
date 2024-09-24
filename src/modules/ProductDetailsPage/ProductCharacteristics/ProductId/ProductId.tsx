import styles from './ProductId.module.scss';

type Props = {
  id: string;
};

export const ProductId = ({ id }: Props) => {
  return (
    <div
      title={id}
      className={`${styles['style-small-text']} ${styles['product-id']}`}
    >
      {`ID: ${id}`}
    </div>
  );
};
