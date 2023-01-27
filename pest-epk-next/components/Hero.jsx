import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroBtn from './HeroBtn';
import About from './About';
import heroImage from '../public/05.jpeg';
import heroImage2 from '../public/06.jpeg';
// import heroImage3 from '../public/03.jpeg';

const Hero = () => {
  const btnLink = () => {
    window.open(
      'https://open.spotify.com/album/2VLrlocedHBeqnmACWJjgf?si=56n7S0lkS5ivTdzPCBi1Eg'
    );
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='lg:flex'
    >
      <Image src={heroImage} className='lg:hidden' />
    </motion.div>
  );
};

export default Hero;
