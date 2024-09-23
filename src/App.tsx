import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.scss';
import { Footer } from './modules/shared/components/Footer';
import { Header } from './modules/shared/components/Header';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'ua' ? 'ua' : 'en';
  }, [i18n.language]);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
