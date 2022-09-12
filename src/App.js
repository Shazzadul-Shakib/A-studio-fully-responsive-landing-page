import './App.css';
import Clients from './components/Clients/Clients';
import Feature from './components/Feature/Feature';
import Feedback from './components/Feedback/Feedback';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Servicees/Services';
import Subscription from './components/Subscription/Subscription';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Feature />
      <Feedback />
      <Subscription />
    </div>
  );
}

export default App;
