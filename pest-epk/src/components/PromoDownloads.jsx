import image1 from '../img/promo/download/01.jpg';
import image2 from '../img/promo/download/02.jpg';
import image3 from '../img/promo/download/03.jpg';
import image4 from '../img/promo/download/04.jpg';
import image5 from '../img/promo/download/05.jpg';
import image6 from '../img/promo/download/06.jpg';

const PromoDownloads = () => {
  return (
    <div>
      <div className='dropdown dropdown-top flex-col justify-center text-white lg:text-2xl'>
        <label tabIndex={0} className='btn m-1'>
          Downloads
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <a className='' href={image1} download>
              Image 1
            </a>
          </li>
          <li>
            <a className='' href={image2} download>
              Image 2
            </a>
          </li>
          <li>
            <a className='' href={image3} download>
              Image 3
            </a>
          </li>
          <li>
            <a className='' href={image4} download>
              Image 4
            </a>
          </li>
          <li>
            <a className='' href={image5} download>
              Image 5
            </a>
          </li>
          <li>
            <a className='' href={image6} download>
              Image 6
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PromoDownloads;
