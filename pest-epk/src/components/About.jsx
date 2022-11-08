import gif from '../img/pest.gif';
import '../styles/About.css';
const About = () => {
  return (
    <div className='py-16 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 '>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
          <div className='md:5/12 lg:w-5/12'>
            <img src={gif} alt='pest-band' loading='lazy' width='' height='' />
          </div>
          <div className='md:7/12 lg:w-6/12'>
            <h2 className='text-2xl text-black font-bold md:text-4xl uppercase'>
              PEST are a punk rock two piece based in Hertfordshire.
            </h2>
            <p className='mt-6 text-black text-lg'>
              The construction of the energetic unique sound amplified by this
              duo consists of Powerful Industrial drumming by Harvey Denman and
              Thunderous Nu-Metal riffs and Punk Rock vocal by Cameron Taylor.
            </p>
            <p className='mt-4 text-black text-lg'>
              The rebellion started as a Four-Piece in early 2020 but soon took
              flight as a Power Duo leading a new-wave punk rock battle. The
              PEST boys are actively performing shows around London and
              Hertfordshire with expansion out to the rest of the UK planned.
              This is displayed on their variety on social media platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
