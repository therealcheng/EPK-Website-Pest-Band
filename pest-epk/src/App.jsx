import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';
import MusicPlayer from './components/MusicPlayer';
import Promo from './components/Promo';
import Footer from './components/Footer';

//Metadata
const trackTitle = 'Great song by random artist';
const streamUrl = './music/safe.mp3';

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
              streamUrl={streamUrl}
              trackTitle={trackTitle}
              preloadType='auto'
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
