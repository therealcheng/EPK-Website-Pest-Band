const Quote3 = () => {
  const link = (e) => {
    e.preventDefault();
    window.open('https://vm.tiktok.com/ZMN1QjThS/?k=1');
  };
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          “I knew nothing about you guys, I walked in and everyone was moshing,
          it was crazy"
        </h2>

        <div className='card-actions justify-end' onClick={link}>
          <button className='btn btn-primary'>Black Feather, May 2022</button>
        </div>
      </div>
    </div>
  );
};

export default Quote3;
