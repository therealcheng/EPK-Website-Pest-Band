import image1 from '../img/promo/01.jpg';
import image2 from '../img/promo/02.jpg';
import image3 from '../img/promo/03.jpg';
import image4 from '../img/promo/04.jpg';
import image5 from '../img/promo/05.jpg';
import image6 from '../img/promo/06.jpg';
import '../styles/Promo.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Carousel = () => {
  return (
    <div className='carousel rounded-box'>
      <div className='carousel-item w-60 lg:w-96'>
        <LazyLoadImage src={image1} alt='Press1' />
      </div>
      <div className='carousel-item w-60 lg:w-96'>
        <LazyLoadImage src={image2} alt='Press2' />
      </div>
      <div className='carousel-item w-60 lg:w-96'>
        <LazyLoadImage src={image3} alt='Press3' />
      </div>
      <div className='carousel-item w-60 lg:w-96'>
        <LazyLoadImage src={image4} alt='Press4' />
      </div>
      <div className='carousel-item w-60 lg:w-96'>
        <LazyLoadImage src={image5} alt='Press5' />
      </div>
      <div className='carousel-item w-60 lg:w-96'>
        <LazyLoadImage src={image6} alt='Press6' />
      </div>
    </div>
  );
};

export default Carousel;
