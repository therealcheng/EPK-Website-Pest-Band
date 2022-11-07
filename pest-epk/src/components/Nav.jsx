import '../styles/Nav.css';
import logo from '../img/pest-logo.jpg';

const Nav = () => {
  return (
    <div>
      <nav className='nav' id='background-nav'>
        <div className='nav-logo'>
          <img id='logo' src={logo} alt='pest-logo' />
        </div>
        <div>
          <ul className='nav-links'>
            <li>
              <a className='nav-link' href='./index.html'>
                Electronic Press Kit
              </a>
            </li>
            <li>
              <a className='nav-link' href='pestbandofficial@outlook.com'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
