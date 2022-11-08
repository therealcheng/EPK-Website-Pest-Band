import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Hero />
        <div>
          <About />
          <div>
            <Music />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
