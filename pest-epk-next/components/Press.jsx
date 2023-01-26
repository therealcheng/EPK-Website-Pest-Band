import '../styles/Promo.css';
import PressImages from './PressImages';
import PressDownloads from './PressDownloads';

const Press = () => {
  return (
    <div className='background'>
      <div className='lg:p-48'>
        <h1 className=' p-8 text-white flex justify-start lg:text-6xl  lg:pb-36'>
          PRESS PHOTOS
        </h1>
        <div className='pb-4 lg:p-8 flex gap-6'>
          <PressImages />
        </div>
        <div>
          <PressDownloads />
        </div>
      </div>
    </div>
  );
};
Press;
export default Press;
