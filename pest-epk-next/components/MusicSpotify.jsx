const MusicSpotify = () => {
  const link =
    'https://open.spotify.com/embed/album/2VLrlocedHBeqnmACWJjgf?utm_source=generator';
  // window.onSpotifyIframeApiReady = (IFrameAPI) => {
  //   console.log('ready');
  // };
  return (
    <div id='embed-iframe'>
      <iframe
        title='Spotify'
        width='100%'
        height='480'
        src={link}
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default MusicSpotify;
