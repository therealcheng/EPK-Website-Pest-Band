import '../styles/Spotify.css';

const Spotify = () => {
  const link =
    'https://open.spotify.com/embed/artist/65Zmltlk1QXhHR93MiH4Yl?utm_source=generator';
  return (
    <div className='spotify flex justify-center'>
      <iframe
        title='Spotify'
        src={link}
        width='50%'
        height='300'
        frameBorder=''
        loading='lazy'
      ></iframe>
      <a
        href='https://open.spotify.com/artist/65Zmltlk1QXhHR93MiH4Yl?si=2ZNvcoo5TKK_Itg8mfuXTg'
        target='_blank'
        rel='noreferrer noopener'
        className='group relative block bg-black'
      >
        <img
          alt='Developer'
          src='https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
          className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
        />

        <div className='relative p-8'>
          <p className='text-sm font-medium uppercase tracking-widest text-green-500'>
            PEST
          </p>

          <p className='text-2xl font-bold text-white'>Cam and Harv</p>

          <div className='mt-64'>
            <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
              <p className='text-sm text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Spotify;
