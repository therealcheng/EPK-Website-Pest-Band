import Quote1 from './Quote1';
import Quote2 from './Quote2';
import Quote3 from './Quote3';
import Quote4 from './Quote4';
import Quote5 from './Quote5';
import Quote from './Quote';
import '../styles/Quotes.css';
import { useState } from 'react';
import imageReview from '../img/In-purg.jpg';
import imageAlyx from '../img/alyx.jpg';

const Quotes = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 md:p-12'>
      <div className='lg:p-36'>
        <h1 className='p-10 lg:text-6xl text-white'>PRESS ARTICLES</h1>
      </div>
      <div className=' flex flex-col gap-8 items-center pb-8 lg:pb-48 md:flex-row md:justify-center lg:gap-10'>
        <Quote
          name={'Iain Key, Louder Than War Radio'}
          quote={`PEST: In Purgatory EP review`}
          link={
            'https://louderthanwar.com/pest-in-purgatory-ep-review/#lb9i0wdv8g1w44w7hx'
          }
          image={imageReview}
        />
        <Quote
          name={'Alyx Holcombe BBC Radio 1'}
          quote={`"What a way to start the show!”`}
          link={
            'https://www.instagram.com/reel/CljEFAuIZqD/?utm_source=ig_web_copy_link'
          }
          image={imageAlyx}
        />
        <Quote1 />
        <div>Show more</div>
        <Quote2 visibility={0} />
        <Quote3 visibility={0} />
      </div>
    </div>
  );
};

export default Quotes;
