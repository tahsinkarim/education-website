import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </div>
  );
}

export default App;
