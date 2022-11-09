const Quote1 = () => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          If this does not wake you up, then I don’t know what will
        </h2>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Dislocated Magazine</button>
        </div>
      </div>
    </div>
  );
};

export default Quote1;
