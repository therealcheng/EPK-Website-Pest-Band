import image from '../img/blackFeather.png';
import { motion } from 'framer-motion';

const Quote3 = () => {
  const link = (e) => {
    e.preventDefault();
    window.open('https://vm.tiktok.com/ZMFPRDH5j/');
  };
  return (
    <div className='card w-72 lg:w-96 bg-base-100 shadow-xl'>
      <figure>
        <a
          href='https://vm.tiktok.com/ZMFPRDH5j/'
          target='_blank'
          rel='noreferrer'
        >
          <motion.img
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            className='hidden md:block lg:block'
            src={image}
            alt='Tiktok id:blackfeatherblackfeather'
          />
        </a>
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
