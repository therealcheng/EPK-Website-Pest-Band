import image from '../img/blackFeather.png';

const Quote3 = () => {
  const link = (e) => {
    e.preventDefault();
    window.open('https://vm.tiktok.com/ZMFPRDH5j/');
  };
  return (
    <div className='card w-72 lg:w-96 bg-base-100 shadow-xl'>
      <figure>
        <img className='hidden md:block  lg:block' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='italic card-title text-white'>
          “I knew nothing about you guys, I walked in and everyone was moshing,
          it was crazy"
        </h2>
        <p>Black Feather</p>
        <div className='card-actions justify-end' onClick={link}>
          <button className='btn btn-primary'>Watch Interview</button>
        </div>
      </div>
    </div>
  );
};

export default Quote3;
