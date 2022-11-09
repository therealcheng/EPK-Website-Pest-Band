import '../styles/Promo.css';
import Carousel from './Carousel';
import PromoDownloads from './PromoDownloads';

const Promo = () => {
  return (
    <div className='background'>
      <div className='p-48'>
        <h1 className=' text-6xl text-white'>PRESS PHOTOS</h1>
        <div className='p-48 flex gap-6'>
          <Carousel />
        </div>
        <div>
          <PromoDownloads />
        </div>
      </div>
    </div>
  );
};

export default Promo;
