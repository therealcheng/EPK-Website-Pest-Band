import Spotify from './Spotify';

const Quotes = () => {
  return (
    <div className='bg-black flex justify-evenly'>
      <div className='p-12'>
        <Spotify />
      </div>
      <div className='pt-10'>
        <h1 className='text-white text-xl p-8'>
          “If this does not wake you up, then I don’t know what will.” <br></br>
          <p className='flex justify-end text-sm'>Dislocated Magazine</p>
        </h1>
        <h1 className='text-white text-xl pt-0'>
          “The heaviest thing to come out of the county since Enter Shikari"
          <br></br>
          <p className='flex justify-end text-sm'>
            Iain Key, Louder Than War Radio
          </p>
        </h1>
        <h1 className='text-white text-xl pt-8'>
          “I knew nothing about you guys, I walked in and everyone was moshing,
          it was crazy”
          <br></br>
          <p className='flex justify-end text-sm'>Black Feather</p>
        </h1>
      </div>
    </div>
  );
};

export default Quotes;
