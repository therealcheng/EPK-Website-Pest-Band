import '../styles/Nav.css';
import {
  IoLogoInstagram,
  IoMail,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoTiktok,
  IoLogoYoutube,
} from 'react-icons/io5';
import { motion } from 'framer-motion';

import { BsSpotify, BsApple } from 'react-icons/bs';

const NavIcons = () => {
  return (
    <div className='flex gap-4'>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='mailto: pestbandofficial@outlook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoMail />
        </a>
      </motion.ul>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='https://instagram.com/pest.band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoInstagram />
        </a>
      </motion.ul>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='https://facebook.com/pest.band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoFacebook />
        </a>
      </motion.ul>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='https://twitter.com/PEST_band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoTwitter />
        </a>
      </motion.ul>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='https://tiktok.com/@pest.band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoTiktok />
        </a>
      </motion.ul>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='https://youtube.com/channel/UCcNDjPiu7JAJ1dxjUcQb1og'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoYoutube />
        </a>
      </motion.ul>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='https://open.spotify.com/artist/65Zmltlk1QXhHR93MiH4Yl?si=KvURxE5cQ-ePUTWFtR48Xg'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsSpotify />
        </a>
      </motion.ul>
      <motion.ul
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.3 }}
        className=''
      >
        <a
          href='https://music.apple.com/gb/artist/pest/1622242073'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsApple />
        </a>
      </motion.ul>
    </div>
  );
};

export default NavIcons;
