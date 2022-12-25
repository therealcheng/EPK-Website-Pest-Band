import ReactAudioPlayer from 'react-audio-player';
import safe from '../music/Safe.mp3';
import step from '../music/Step.mp3';
import www from '../music/WWW.mp3';

const MusicPlayer = () => {
  return (
    <div className='place-self-auto'>
      <ReactAudioPlayer src={safe} autoPlay controls />
    </div>
  );
};

export default MusicPlayer;
