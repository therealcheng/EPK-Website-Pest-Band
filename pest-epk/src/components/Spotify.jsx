import '../styles/Spotify.css';
import Card from './MusicCard';

const Spotify = () => {
  const link =
    'https://open.spotify.com/embed/artist/65Zmltlk1QXhHR93MiH4Yl?utm_source=generator';
  return (
    <div className='spotify flex justify-center'>
      <iframe
        title='Spotify'
        src={link}
        width='50%'
        height='300'
        frameBorder=''
        loading='lazy'
      ></iframe>
      <Card />
    </div>
  );
};

export default Spotify;
