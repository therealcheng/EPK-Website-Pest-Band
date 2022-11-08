import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Spotify from './components/Spotify';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Hero />
        <div>
          <About />
          <div>
            <Spotify />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
