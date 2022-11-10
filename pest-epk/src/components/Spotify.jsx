import '../styles/Spotify.css';
import Card from './MusicCard';

const Spotify = () => {
  const link =
    'https://open.spotify.com/embed/artist/65Zmltlk1QXhHR93MiH4Yl?utm_source=generator';
  return (
    <div className='lg:flex lg:justify-center'>
      <div className='lg:hidden'>
        <Card />
      </div>
      <iframe
        title='Spotify'
        width='100%'
        height='200'
        src={link}
        loading='lazy'
      ></iframe>
      <div className='hidden lg:block'>
        <Card />
      </div>
    </div>
  );
};

export default Spotify;
