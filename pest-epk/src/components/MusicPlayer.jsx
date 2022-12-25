import ReactAudioPlayer from 'react-audio-player';
import safe from '../music/Safe.mp3';

const MusicPlayer = () => {
  return <ReactAudioPlayer src={safe} autoPlay controls />;
};

export default MusicPlayer;

// React Music Player Ideas
//https://www.npmjs.com/package/react-jinke-music-player
// https://freefrontend.com/react-music-players/
