import image from '../img/disMag.png';
import { motion } from 'framer-motion';

const Quote1 = () => {
  const link = (e) => {
    e.preventDefault();
    window.open(
      'https://indd.adobe.com/view/f079e9f6-2574-424f-81c3-e6a82b90ab1e'
    );
  };
  return (
    <div className='card w-72 lg:w-96 bg-base-100 shadow-xl'>
      <figure>
        <a
          href='https://indd.adobe.com/view/f079e9f6-2574-424f-81c3-e6a82b90ab1e'
          target='_blank'
          rel='noreferrer'
        >
          <motion.img
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            className='hidden md:block lg:block'
            src={image}
            alt='Dislocated Magazine'
          />
        </a>
      </figure>
      <div className='card-body'>
        <h2 className='italic card-title text-white'>
          "If this does not wake you up, then I don’t know what will"
        </h2>
        <p>Dislocated Magazine</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={link}>
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote1;
