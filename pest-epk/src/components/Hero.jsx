import '../styles/Hero.css';

const Hero = () => {
  const preSave = () => {
    window.open('https://distrokid.com/hyperfollow/pest4/in-purgatory');
  };
  return (
    <div className='hero-main lg:p-96'>
      <div className='lg:block lg:max-w-md'>
        <h1 className='text-2xl flex lg:block pr-12 justify-end p-48 lg:mb-10 lg:text-6xl lg:font-bold lg:pr-0 lg:pl-96'>
          IN PURGATORY
        </h1>
      </div>
      <div className='flex justify-center pb-4'>
        <button
          onClick={preSave}
          className='btn btn-active btn-accent alight-center'
        >
          Presave
        </button>
      </div>
      <h1 className='flex lg:justify-end justify-center text-2xl lg:mb-10 lg:text-xl font-bold'>
        RELEASE DATE: 03/12/2022
      </h1>
    </div>
  );
};

export default Hero;
