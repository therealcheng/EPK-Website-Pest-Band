import Quote1 from './Quote1';
import Quote2 from './Quote2';
import Quote3 from './Quote3';
import '../styles/Quotes.css';

const Quotes = () => {
  return (
    <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r pt-4'>
      <div className='flex justify-center text-6xl text-white'>
        PRESS ARTICLES
      </div>
      <div className='flex p-24 justify-center gap-10'>
        <Quote1 />
        <Quote2 />
        <Quote3 />
      </div>
    </div>
  );
};

export default Quotes;
