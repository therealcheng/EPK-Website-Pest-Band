import image from '../img/blackFeather.png';
import { motion } from 'framer-motion';

const cite1 = {
  name: 'Black Feather',
  quote: `“I knew nothing about you guys, I walked in and everyone was moshing,
  it was crazy"`,
  link: 'https://vm.tiktok.com/ZMFPRDH5j/',
};

const Quote1 = () => {
  return (
    <div className='card w-72 lg:w-96 bg-base-100 shadow-xl'>
      <figure>
        <a href={cite1.link} target='_blank' rel='noreferrer'>
          <motion.img
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            className='hidden md:block lg:block'
            src={image}
            alt='Article Image'
          />
        </a>
      </figure>
      <div className='card-body'>
        <h2 className='italic card-title text-white'>{cite1.quote}</h2>
        <p>{cite1.name}</p>
        <div className='card-actions justify-end'>
          <form action={cite1.link} target='_blank'>
            <button className='btn btn-primary'>Read Article</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote1;
