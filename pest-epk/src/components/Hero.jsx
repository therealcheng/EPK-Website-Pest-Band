import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className='hero-main lg:p-96'>
      <div className='lg:pl-96 lg:max-w-md'>
        <h1 className='text-2xl flex pr-12 justify-end p-48 lg:mb-10 lg:text-8xl lg:font-bold'>
          IN PURGATORY <br></br>
        </h1>
        <h1 className='flex justify-center text-2xl lg:mb-10 lg:text-7xl font-bold'>
          DECEMBER 3rd
        </h1>
        {/* <button className=''>Be ready, this is PEST</button> */}
      </div>
    </div>
  );
};

export default Hero;
