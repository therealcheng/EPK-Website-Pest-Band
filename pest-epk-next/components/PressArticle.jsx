import { motion } from 'framer-motion';
import Image from 'next/image';

const PressArticle = ({ name, quote, link, image }) => {
  return (
    <div className='card w-72 lg:w-96 bg-base-300  shadow-xl '>
      <figure>
        <a href={link} target='_blank' rel='noreferrer'>
          <Image
            className='md:block lg:block max-w-48 max-h-48 max-w-2xl'
            width={300}
            height={200}
            src={image}
            alt='Article Image'
          />
        </a>
      </figure>
      <div className='card-body'>
        <h2 className='italic card-title text-white'>{quote}</h2>
        <p>{name}</p>
        <div className='card-actions justify-end'>
          <form action={link} target='_blank'>
            <button className='btn btn-primary'>Read Article</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PressArticle;
