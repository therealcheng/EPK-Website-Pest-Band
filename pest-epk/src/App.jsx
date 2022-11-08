import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Hero />
        <div>
          <About />
          <div>
            <Quotes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
