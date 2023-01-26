import image1 from '../img/promo/01.jpg';
import image2 from '../img/promo/02.jpeg';
import image3 from '../img/promo/03.jpeg';
import image4 from '../img/promo/04.jpeg';
import image5 from '../img/promo/05.jpeg';
import image6 from '../img/promo/06.jpeg';
import '../styles/Promo.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

const Carousel = ({ src }) => {
  return (
    <div className='carousel rounded-box'>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <LazyLoadImage src={image1} alt='Press1' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <LazyLoadImage src={image2} alt='Press2' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <LazyLoadImage src={image3} alt='Press3' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <LazyLoadImage src={image4} alt='Press4' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <LazyLoadImage src={image5} alt='Press5' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <LazyLoadImage src={image6} alt='Press6' />
      </motion.div>
    </div>
  );
};

export default Carousel;
