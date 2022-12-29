import Quote1 from './Quote1';
import Quote2 from './Quote2';
import Quote3 from './Quote3';
import Quote4 from './Quote4';
import Quote5 from './Quote5';
import '../styles/Quotes.css';
import image from '../img/disMag.png';
import { motion } from 'framer-motion';

const Quotes = () => {
  const cite1 = {
    name: 'Dislocated Magazine',
    quote: '"If this does not wake you up, then I don’t know what will"',
    link: 'https://indd.adobe.com/view/f079e9f6-2574-424f-81c3-e6a82b90ab1e',
  };
  return (
    <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 md:p-12'>
      <div className='lg:p-36'>
        <h1 className='p-10 lg:text-6xl text-white'>PRESS ARTICLES</h1>
      </div>
      <div className=' flex flex-col gap-8 items-center pb-8 lg:pb-48 md:flex-row md:justify-center lg:gap-10'>
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
      </div>
    </div>
  );
};

export default Quotes;
