import '../styles/Spotify.css';

const MusicSpotify = () => {
  const link =
    'https://open.spotify.com/embed/album/2VLrlocedHBeqnmACWJjgf?utm_source=generator';
  return (
    <div className='lg:flex lg:justify-center'>
      <iframe
        className=''
        title='Spotify'
        width='100%'
        height='380'
        src={link}
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default MusicSpotify;
