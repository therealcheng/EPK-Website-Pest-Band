import { useState, useEffect, useRef } from 'react';
import '../styles/MusicPlayer.css';
// Props

const AudioPlayer = ({ title, artist, image }) => {
  // State
  // const [trackIndex, setTrackIndex] = useState(0);
  // const [trackProgress, setTrackProgress] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  // Destructure
  // const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  return (
    <div className='audio-player'>
      <div className='track-info'>
        <img
          className='artwork'
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className='title'>{title}</h2>
        <h3 className='artist'>{artist}</h3>
      </div>
    </div>
  );
};

export default AudioPlayer;
