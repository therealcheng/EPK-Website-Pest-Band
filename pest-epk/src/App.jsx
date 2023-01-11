import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';
import MusicPlayer from './components/MusicPlayer';
import Promo from './components/Promo';
import Footer from './components/Footer';
import Purg from './img/In-purg.jpg';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Hero />
        <div>
          <About />
          <div>
            <MusicPlayer
              title={'Safe'}
              artist={'Pest'}
              // audioSrc: string | import,
              image={Purg}
              // color: string,
            />
            <div>
              <Quotes />
              <div>
                <Promo />
                <div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
