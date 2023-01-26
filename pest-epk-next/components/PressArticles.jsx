import PressArticle from './PressArticle';
import imageReview from '../public/In-purg.jpg';
import imageAlyx from '../public/alyx.jpg';
import imageDisMag from '../public/disMag.png';
import imageLouder from '../public/louderThanWar.png';
import imageFeather from '../public/blackFeather.png';

const PressArticles = () => {
  return (
    <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 md:p-12'>
      <div className='lg:p-36'>
        <h1 className='p-10 lg:text-6xl text-white'>PRESS ARTICLES</h1>
      </div>
      <div className=' flex flex-col gap-8 items-center pb-8 lg:pb-48 md:flex-row md:justify-center lg:gap-10'>
        <PressArticle
          name={'Iain Key, Louder Than War Radio'}
          quote={`PEST: In Purgatory EP review`}
          link={
            'https://louderthanwar.com/pest-in-purgatory-ep-review/#lb9i0wdv8g1w44w7hx'
          }
          image={imageReview}
        />
        <PressArticle
          name={'Alyx Holcombe BBC Radio 1'}
          quote={`"What a way to start the show!”`}
          link={
            'https://www.instagram.com/reel/CljEFAuIZqD/?utm_source=ig_web_copy_link'
          }
          image={imageAlyx}
        />
        <PressArticle
          name={'Dislocated Magazine'}
          quote={'"If this does not wake you up, then I don’t know what will"'}
          link={
            'https://indd.adobe.com/view/f079e9f6-2574-424f-81c3-e6a82b90ab1e'
          }
          image={imageDisMag}
        />
        <PressArticle
          name={'Iain Key, Louder Than War Radio'}
          quote={
            ' “The heaviest thing to come out of the county since Enter Shikari”'
          }
          link={
            'https://louderthanwar.com/pest-nicotine-wake-up-single-review/'
          }
          image={imageLouder}
        />
        <PressArticle
          name={'Black Feather'}
          quote={`“I knew nothing about you guys, I walked in and everyone was moshing,
  it was crazy"`}
          link={'https://vm.tiktok.com/ZMFPRDH5j/'}
          image={imageFeather}
        />
      </div>
    </div>
  );
};

export default PressArticles;
