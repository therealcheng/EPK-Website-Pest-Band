import { motion } from 'framer-motion';
const HeroBtn = () => {
  return (
    <div className='flex justify-center pb-4'>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ delay: 1, duration: 0.3 }}
        onClick={btnLink}
        className='btn btn-active btn-accent alight-center'
      >
        OUT NOW
      </motion.button>
    </div>
  );
};

export default HeroBtn;
