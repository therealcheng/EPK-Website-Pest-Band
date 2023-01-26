import { motion } from 'framer-motion';

const PressArticle = (props) => {
  return (
    <div className='card w-72 lg:w-96 bg-base-100 shadow-xl'>
      <figure>
        <a href={props.link} target='_blank' rel='noreferrer'>
          <motion.img
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            className='md:block lg:block max-w-48 max-h-48 max-w-2xl'
            src={props.image}
            alt='Article Image'
          />
        </a>
      </figure>
      <div className='card-body'>
        <h2 className='italic card-title text-white'>{props.quote}</h2>
        <p>{props.name}</p>
        <div className='card-actions justify-end'>
          <form action={props.link} target='_blank'>
            <button className='btn btn-primary'>Read Article</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PressArticle;
