import '../styles/Nav.css';
import logo from '../img/pest-logo.jpg';
import IconLinks from './IconLinks';

const Nav = () => {
  return (
    <div>
      <nav className='nav' id='background-nav'>
        <div className='flex justify-center'>
          <img className='' src={logo} width={50} alt='pest-logo' />
        </div>
        <div className='nav-logo'>
          <img className='hidden' src={logo} alt='pest-logo' />
          <div>
            <IconLinks />
          </div>
        </div>
        <div className='pt-8'>
          <ul className='nav-links'>
            <li>
              <a className='hidden md:block md:nav-link' href='./index.html'>
                Electronic Press Kit
              </a>
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
