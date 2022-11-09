const Quote2 = () => {
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
          <button className='btn btn-primary'>
            Iain Key, Louder Than War Radio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote2;
