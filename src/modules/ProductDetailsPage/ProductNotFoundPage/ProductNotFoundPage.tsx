// import styles from './ProductNotFoundPage.module.scss';

import { useNavigate } from 'react-router-dom';

export const ProductNotFoundPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <button onClick={handleBack}>Back</button>
      <h1>Product not found</h1>;
    </div>
  );
};
