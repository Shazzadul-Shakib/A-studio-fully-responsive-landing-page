import './App.css';
import Clients from './components/Clients/Clients';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Servicees/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Clients />
      <Services/>
    </div>
  );
}

export default App;
