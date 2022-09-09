import './App.css';
import Clients from './components/Clients/Clients';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Clients />
    </div>
  );
}

export default App;
