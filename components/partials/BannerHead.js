import Image from 'next/image';
import BannerListItem from './BannerListItem';

export default function BannerHead() {
  return (
    <div className='text-white border'>
      <div className='container grid grid-cols-12 mx-auto bg-unhealthy'>
        <div className='bg-no-repeat bg-cover mx-auto my-auto col-span-full md:col-span-4 lg:col-span-4'>
          <Image
            src={'/icon/air_quality/dangerous.svg'}
            height={98}
            width={98}
            alt={'icons'}
          />
        </div>
        <div className='flex flex-col p-6 col-span-full row-span-full md:col-span-8 lg:col-span-8 lg:p-10'>
          <h1 className='text-3xl font-semibold'>Good Air Quality</h1>
          <p className='flex-1 pt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            reprehenderit adipisci tempore voluptas laborum quod.
          </p>
        </div>
      </div>
      <div className='py-2 px-4 text-slate-600 font-semibold'>
        <h3 className='text-lg'>Overview</h3>
        <BannerListItem
          title={'PM10'}
          value={90}
          symbol={' µg/m³'}
          icon={'up'}
          iconColor={'red'}
        />
        <BannerListItem
          title={'CO2'}
          value={210}
          symbol={' ppm'}
          icon={'down'}
          iconColor={'green'}
        />
        <BannerListItem
          title={'Temperature'}
          value={21}
          symbol={'°C'}
          icon={'up'}
          iconColor={'red'}
        />
        <BannerListItem
          title={'Humidity'}
          value={90}
          symbol={'%'}
          icon={'down'}
          iconColor={'green'}
        />
      </div>
    </div>
  );
}
