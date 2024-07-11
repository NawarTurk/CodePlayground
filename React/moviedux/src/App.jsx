import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MovieGrid from './component/MovieGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>
      <MovieGrid />
     <Footer />
    </div>
  );
}

export default App;
