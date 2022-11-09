import '../styles/Nav.css';
import {
  IoLogoInstagram,
  IoMail,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoTiktok,
  IoLogoYoutube,
} from 'react-icons/io5';

import { BsSpotify, BsApple } from 'react-icons/bs';

const NavIcons = () => {
  return (
    <div className='flex pb-6'>
      <ul className='pr-8'>
        <a
          href='mailto: pestbandofficial@outlook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoMail />
        </a>
      </ul>
      <ul className='pr-8'>
        <a
          href='https://instagram.com/pest.band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoInstagram />
        </a>
      </ul>
      <ul className='pr-8'>
        <a
          href='https://facebook.com/pest.band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoFacebook />
        </a>
      </ul>
      <ul className='pr-8'>
        <a
          href='https://twitter.com/PEST_band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoTwitter />
        </a>
      </ul>
      <ul className='pr-8'>
        <a
          href='https://tiktok.com/@pest.band'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoTiktok />
        </a>
      </ul>
      <ul className='pr-8'>
        <a
          href='https://youtube.com/channel/UCcNDjPiu7JAJ1dxjUcQb1og'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoYoutube />
        </a>
      </ul>
      <ul className='pr-8'>
        <a
          href='https://open.spotify.com/artist/65Zmltlk1QXhHR93MiH4Yl?si=KvURxE5cQ-ePUTWFtR48Xg'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsSpotify />
        </a>
      </ul>
      <ul className='pr-8'>
        <a
          href='https://music.apple.com/gb/artist/pest/1622242073'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsApple />
        </a>
      </ul>
    </div>
  );
};

export default NavIcons;
