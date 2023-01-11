import { useStaSte, useEffect, useRef } from 'react';
import '../styles/MusicPlayer.css';
// Props

const AudioPlayer = ({ tracks }) => {
  // State
  // const [trackIndex, setTrackIndex] = useState(0);
  // const [trackProgress, setTrackProgress] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  // Destructure
  // const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  // const audioRef = useRef(new Audio(audioSrc));
  // const intervalRef = useRef();
  // const isReady = useRef(false);

  return (
    <div className='audio-player'>
      <div className='track-info'>
        <img
          className='artwork'
          src={tracks.image}
          alt={`tracks artwork for ${tracks.title} by ${tracks.artist}`}
        />
        <h2 className='title'>{tracks.title}</h2>
        <h3 className='artist'>{tracks.artist}</h3>
      </div>
    </div>
  );
};

export default AudioPlayer;
