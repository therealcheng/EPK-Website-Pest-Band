import NavIcons from './NavIcons';

const Footer = () => {
  return (
    <footer
      aria-label='Site Footer'
      className='bg-white text-center dark:bg-gray-900'
    >
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl space-y-6'>
          <div className='flex justify-center'>
            <NavIcons />
          </div>
          <p className='mx-auto max-w-lg text-xs text-gray-500 dark:text-gray-400'>
            All rights reserved as part of a copyright notice.
            <span className='mt-4 block'>&copy; 2022, PEST Band.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
