import image from '../img/louderThanWar.png';
import { motion } from 'framer-motion';

const Quote2 = () => {
  const link = (e) => {
    e.preventDefault();
    window.open(
      'https://louderthanwar.com/pest-nicotine-wake-up-single-review/'
    );
  };
  return (
    <div className='card  w-72 lg:w-96 bg-base-100 shadow-xl'>
      <figure>
        <a
          href='https://louderthanwar.com/pest-nicotine-wake-up-single-review/'
          target='_blank'
          rel='noreferrer'
        >
          <motion.img
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            className='hidden md:block lg:block'
            src={image}
            alt='Louder Than War'
          />
        </a>
      </figure>
      <div className='card-body'>
        <h2 className='italic card-title text-white'>
          “The heaviest thing to come out of the county since Enter Shikari”
        </h2>
        <p>Iain Key, Louder Than War Radio</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={link}>
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote2;
