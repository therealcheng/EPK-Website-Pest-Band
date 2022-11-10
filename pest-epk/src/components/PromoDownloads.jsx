import image1 from '../img/promo/01.jpg';
import image2 from '../img/promo/02.jpg';
import image3 from '../img/promo/03.jpg';
import image4 from '../img/promo/04.jpg';
import image5 from '../img/promo/05.jpg';
import image6 from '../img/promo/06.jpg';

const PromoDownloads = () => {
  return (
    <div>
      <div className='flex-col justify-center text-white lg:text-2xl'>
        <ul>
          <h1 className='lg:text-3xl underline'>Jpegs</h1>
        </ul>
        <ul>
          Download &nbsp;
          <a className='text-red-500' href={image1} download>
            Image 1
          </a>
        </ul>
        <ul>
          Download &nbsp;
          <a className='text-red-500' href={image2} download>
            Image 2
          </a>
        </ul>
        <ul>
          Download &nbsp;
          <a className='text-red-500' href={image3} download>
            Image 3
          </a>
        </ul>
        <ul>
          Download &nbsp;
          <a className='text-red-500' href={image4} download>
            Image 4
          </a>
        </ul>
        <ul>
          Download &nbsp;
          <a className='text-red-500' href={image5} download>
            Image 5
          </a>
        </ul>
        <ul>
          Download &nbsp;
          <a className='text-red-500' href={image6} download>
            Image 6
          </a>
        </ul>
      </div>
    </div>
  );
};

export default PromoDownloads;
