import image from '../img/in-purg.jpg';
import { motion } from 'framer-motion';

const cite1 = {
  name: 'Iain Key, Louder Than War Radio',
  quote: `PEST: In Purgatory – EP review`,
  link: 'https://louderthanwar.com/pest-in-purgatory-ep-review/#lb9i0wdv8g1w44w7hx',
};

const Quote1 = () => {
  return (
    <div className='card w-72 lg:w-96 bg-base-100 shadow-xl'>
      <figure>
        <a href={cite1.link} target='_blank' rel='noreferrer'>
          <motion.img
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            className='hidden md:block lg:block max-h-48 max-w-2xl'
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
