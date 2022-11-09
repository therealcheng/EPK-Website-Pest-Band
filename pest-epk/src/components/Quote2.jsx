const Quote2 = () => {
  const link = (e) => {
    e.preventDefault();
    window.open(
      'https://louderthanwar.com/pest-nicotine-wake-up-single-review/'
    );
  };
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          “The heaviest thing to come out of the county since Enter Shikari ”
        </h2>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={link}>
            Iain Key, Louder Than War Radio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote2;
