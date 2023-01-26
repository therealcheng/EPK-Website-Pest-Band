import image1 from '../public/01.jpg';
import image2 from '../public/02.jpeg';
import image3 from '../public/03.jpeg';
import image4 from '../public/04.jpeg';
import image5 from '../public/05.jpeg';
import image6 from '../public/06.jpeg';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PressImages = ({ src }) => {
  return (
    <div className='carousel rounded-box'>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <Image src={image1} alt='Press1' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <Image src={image2} alt='Press2' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <Image src={image3} alt='Press3' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <Image src={image4} alt='Press4' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <Image src={image5} alt='Press5' />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='carousel-item w-60 lg:w-96'
      >
        <Image src={image6} alt='Press6' />
      </motion.div>
    </div>
  );
};

export default PressImages;
