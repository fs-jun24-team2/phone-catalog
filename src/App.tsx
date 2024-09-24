import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.scss';
import { Footer } from './modules/shared/components/Footer';
import { Header } from './modules/shared/components/Header';
import { PopupSubscribe } from './modules/shared/components/PopupSubscribe';
import { ProductsCategory } from './types/ProductsCategory';
import { useAppDispatch } from './app/hooks';
import { loadProductsAsync } from './features/productsSlice';
import { loadAllProductsAsync } from './features/aggregateSlice';

function App() {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'ua' ? 'ua' : 'en';
  }, [i18n.language]);
  useEffect(
    () => {
      const categories = Object.values(ProductsCategory);

      const fetchData = async () => {
        await Promise.all([
          ...categories.map(category => dispatch(loadProductsAsync(category))),
          dispatch(loadAllProductsAsync()),
        ]);
      };

      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className="wrapper">
      <PopupSubscribe />
      <Header />
      <main className="main">
        <div className="main__container grid-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
