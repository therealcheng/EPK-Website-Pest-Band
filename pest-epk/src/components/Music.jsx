import Spotify from './Spotify';

const Music = () => {
  return (
    <div className='bg-black'>
      <div className='lg:py-12 lg:px-48'>
        <div className='pb-8'>
          <Spotify />
        </div>
      </div>
    </div>
  );
};

export default Music;
