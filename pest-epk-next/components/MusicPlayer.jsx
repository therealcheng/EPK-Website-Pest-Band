const MusicPlayer = () => {
  const link =
    'https://open.spotify.com/embed/album/2VLrlocedHBeqnmACWJjgf?utm_source=generator';

  return (
    <div className='p-4 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div>
        <iframe
          title='Spotify Player'
          width='100%'
          height='480'
          src={link}
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default MusicPlayer;
