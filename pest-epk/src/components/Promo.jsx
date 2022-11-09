import '../styles/Promo.css';
import PromoCarousel from './PromoCarousel';
import PromoDownloads from './PromoDownloads';

const Promo = () => {
  return (
    <div className='background'>
      <div className='p-48'>
        <h1 className=' flex justify-start text-6xl text-white'>
          PRESS PHOTOS & ARTWORK
        </h1>
        <div className='p-48 flex gap-6'>
          <PromoCarousel />
        </div>
        <div>
          <PromoDownloads />
        </div>
      </div>
    </div>
  );
};

export default Promo;
