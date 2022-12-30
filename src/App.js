import './App.css';
import Creations from './components/creations/creations';
import Header from './components/header/header';
import Introduction from './components/introduction/introduction';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Header />

      <Introduction />

      <Creations />

      <Footer />
    </div>
  );
}

export default App;
