import NavIcons from './NavIcons';
import Image from 'next/image';
import logo from '../public/pest-logo.jpg';

const Nav = () => {
  return (
    <div>
      <nav className='nav lg:flex lg:gap-12' id='background-nav'>
        <div className='flex justify-center'>
          <Image className='lg:hidden' src={logo} width={50} alt='pest-logo' />
        </div>
        <div className='nav-logo'>
          <Image className='hidden lg:block w-20' src={logo} alt='pest-logo' />
          <div className='lg:pl-12'>
            <NavIcons />
          </div>
        </div>
        <div className='pt-8'>
          <ul className='lg:nav-links'>
            <li>
              {/* <a
                className='hidden md:flex md:nav-link md:justify-center md:pb-8'
                href='./index.html'
              >
                Electronic Press Kit
              </a> */}
            </li>
            {/* <li>
              <a className='nav-link' href='pestbandofficial@outlook.com'>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
