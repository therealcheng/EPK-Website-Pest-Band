import image1 from '../public/01.jpg';
import image2 from '../public/02.jpeg';
import image3 from '../public/03.jpeg';
import image4 from '../public/04.jpeg';
import image5 from '../public/05.jpeg';
import image6 from '../public/06.jpeg';

const PressDownloads = () => {
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
          <li>
            <a
              className='text-red-500'
              href='https://pdfhost.io/v/4iMTIZr~f_Pest_Tech_Spec'
              target='_blank'
              download
            >
              Tech Spec
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PressDownloads;
