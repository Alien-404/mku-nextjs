import ButtonFill from './partials/ButtonFill';
import FeatureItem from './partials/FeatureItem';
import featureItemList from '../json/featureItem.json';

export default function Feature() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col lg:flex-row'>
        <div className='max-w-xl pr-16 mx-auto mb-10'>
          <h5 className='mb-6 text-3xl font-bold leading-none'>
            Sensors built into the device for air quality monitoring
          </h5>
          <p className='mb-6 text-gray-900'>
            Each device, there are several sensors stored for monitoring with
            their respective functions. The sensors used in each device are
            DHT22 for temperature and air, MQ135 to detect CO2 levels in the
            air, and the last MQ7 to detect CO gas levels.
          </p>
          <div className='flex items-center'>
            <ButtonFill title={'Discover'} link={'/device'} />
          </div>
        </div>
        <div className='grid gap-5 row-gap-5 sm:grid-cols-2'>
          {featureItemList &&
            featureItemList.map((item, index) => {
              return <FeatureItem key={index} feautureItem={item} />;
            })}
        </div>
      </div>
    </div>
  );
}
