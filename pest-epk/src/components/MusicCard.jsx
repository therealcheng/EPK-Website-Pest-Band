import image from '../img/spotify.jpg';

const Card = () => {
  return (
    <div className='lg:w-96'>
      <a
        href='https://open.spotify.com/artist/65Zmltlk1QXhHR93MiH4Yl?si=2ZNvcoo5TKK_Itg8mfuXTg'
        target='_blank'
        rel='noreferrer noopener'
        className='group relative block bg-black'
      >
        <img
          alt='PEST Band'
          src={image}
          className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
        />

        <div className='relative p-8'>
          <p className='text-sm font-medium uppercase tracking-widest text-green-500'>
            SPOTIFY
          </p>

          <p className='text-2xl font-bold text-white'>TOP TRACKS</p>

          <div className='mt-64'>
            <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
              <p className='text-sm text-white'>Be ready, this is PEST.</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
