import IconLinks from './IconLinks';

const Footer = () => {
  return (
    <footer
      aria-label='Site Footer'
      className='bg-white text-center dark:bg-gray-900'
    >
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl space-y-6'>
          <div className='flex justify-center'>
            <IconLinks />
          </div>

          {/* <nav
            aria-label='Footer Nav'
            className='rounded-3xl border-4 border-gray-900 p-6 dark:border-gray-700'
          >
            <ul className='flex flex-wrap justify-center gap-6 text-sm font-bold'>
              <li>
                <a
                  className='text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75'
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Back to Top
                </a>
              </li>
            </ul>
          </nav> */}

          <p className='mx-auto max-w-lg text-xs text-gray-500 dark:text-gray-400'>
            All rights reserved as part of a copyright notice.
            <span className='mt-4 block'>
              {' '}
              &copy; 2022, Cheng Lim Photography.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
