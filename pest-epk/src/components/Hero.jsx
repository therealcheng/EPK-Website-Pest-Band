import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className='hero-main lg:p-96'>
      <div className='lg:block lg:max-w-md'>
        <h1 className='text-2xl flex lg:block pr-12 justify-end p-48 lg:mb-10 lg:text-6xl lg:font-bold lg:pr-0 lg:pl-96'>
          IN PURGATORY <br></br>
        </h1>
        <h1 className='flex lg:justify-end justify-center text-2xl lg:mb-10 lg:text-xl font-bold'>
          RELEASE DATE: 03/12/2022
        </h1>
        {/* <button className=''>Be ready, this is PEST</button> */}
      </div>
    </div>
  );
};

export default Hero;
