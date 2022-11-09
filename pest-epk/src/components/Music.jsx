import Spotify from './Spotify';

const Music = () => {
  return (
    <div className='bg-black'>
      <div className='py-12 px-48'>
        <div className='pb-8'>
          <Spotify />
        </div>
      </div>
    </div>
  );
};

export default Music;
