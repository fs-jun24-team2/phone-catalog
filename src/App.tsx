import { Footer } from './components/Footer/Footer';
import './style.scss';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">HEADER</div>
      </header>

      <main className="main">
        <div className="main__container">MAIN</div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
