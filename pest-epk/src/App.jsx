import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Hero />
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
