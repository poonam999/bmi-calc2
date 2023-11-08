//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

// comp defination
function App() {
  return (
    <div className="App">
      <main>
        <HomePage />
      </main>  
      <Footer />    
    </div>
  );
}

export default App;
