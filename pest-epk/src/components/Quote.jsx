import { motion } from 'framer-motion';

const Quote1 = (props) => {
  const mainStyles = 'card w-72 lg:w-96 bg-base-100 shadow-xl';
  return (
    <div className={props.hidden ? 'collapse' : mainStyles}>
      <figure>
        <a href={props.link} target='_blank' rel='noreferrer'>
          <motion.img
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            className='hidden md:block lg:block max-h-48 max-w-2xl'
            src={props.image}
            alt='Article Image'
          />
        </a>
      </figure>
      <div className={props.hidden ? ' invisible' : 'card-body'}>
        <h2
          className={
            props.hidden ? ' invisible' : 'italic card-title text-white'
          }
        >
          {props.quote}
        </h2>
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

export default Quote1;
