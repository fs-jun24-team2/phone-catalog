import { Outlet } from 'react-router-dom';
import './style.scss';
import { Footer } from './modules/shared/components/Footer';
import { Header } from './modules/shared/components/Header';

//import { Breadcrumbs } from './modules/shared/components/Breadcrumbs';
// import { ProductsList } from './modules/shared/components/ProductsList';

function App() {
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
