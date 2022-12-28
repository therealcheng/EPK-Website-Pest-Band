import '../styles/Nav.css';
import logo from '../img/pest-logo.jpg';
import IconLinks from './IconLinks';

const Nav = () => {
  return (
    <div>
      <section className='nav lg:flex lg:gap-12' id='background-nav'>
        <div className='flex justify-center'>
          <img className='lg:hidden' src={logo} width={50} alt='pest-logo' />
        </div>
        <div className='nav-logo'>
          <img className='hidden lg:block w-20' src={logo} alt='pest-logo' />
          <div className='lg:pl-12 lg:pt-8 pb-8'>
            <IconLinks />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
