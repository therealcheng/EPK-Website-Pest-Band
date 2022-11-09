import '../styles/Promo.css';
import Carousel from './Carousel';

const Promo = () => {
  return (
    <div className='background flex justify-center align-middle'>
      <div className='p-48 text-6xl text-white'>
        PRESS PHOTOS
        <div className='p-48 flex gap-6'>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Promo;
