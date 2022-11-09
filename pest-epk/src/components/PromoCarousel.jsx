import image1 from '../img/promo/01.jpg';
import image2 from '../img/promo/02.jpg';
import image3 from '../img/promo/03.jpg';
import image4 from '../img/promo/04.jpg';
import image5 from '../img/promo/05.jpg';
import image6 from '../img/promo/06.jpg';
import '../styles/Promo.css';

const Carousel = () => {
  return (
    <div className='carousel rounded-box'>
      <div className='carousel-item'>
        <img className='w-96 h-fit' src={image1} alt='Press1' />
      </div>
      <div className='carousel-item'>
        <img className='w-96 h-fit' src={image2} alt='Press2' />
      </div>
      <div className='carousel-item'>
        <img className='w-96 h-fit' src={image3} alt='Press3' />
      </div>
      <div className='carousel-item'>
        <img className='w-96 h-fit' src={image4} alt='Press4' />
      </div>
      <div className='carousel-item'>
        <img className='w-96 h-fit' src={image5} alt='Press5' />
      </div>
      <div className='carousel-item'>
        <img className='w-96 h-fit' src={image6} alt='Press6' />
      </div>
    </div>
  );
};

export default Carousel;
