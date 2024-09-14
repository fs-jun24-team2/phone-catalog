import { Outlet } from 'react-router-dom';
import './style.scss';
import { Footer } from './modules/shared/components/Footer';
import { Header } from './modules/shared/components/Header';

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
