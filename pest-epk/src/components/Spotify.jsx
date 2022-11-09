import '../styles/Spotify.css';

const Spotify = () => {
  const link =
    'https://open.spotify.com/embed/artist/65Zmltlk1QXhHR93MiH4Yl?utm_source=generator';
  return (
    <div className='spotify flex justify-center'>
      <iframe
        title='Spotify'
        src={link}
        width='60%'
        height='200'
        frameBorder=''
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Spotify;
