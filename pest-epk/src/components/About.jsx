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
            <h2 className='text-2xl text-black font-bold md:text-4xl'>
              Pest are a punk rock two piece based in Hertfordshire.
            </h2>
            <p className='mt-6 text-black'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className='mt-4 text-black'>
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
