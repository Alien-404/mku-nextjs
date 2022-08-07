import Image from 'next/image';
import BannerInformation from './BannerInformation';
import BannerListItem from './BannerListItem';

export default function BannerHead({ data_sensor, data_yesterday }) {
  const { condition, data_result } = data_sensor;
  return (
    <div className='text-white border'>
      <div
        className={`container grid grid-cols-12 mx-auto bg-${condition.replace(
          / /g,
          '_'
        )}`}
      >
        <div className='bg-no-repeat bg-cover mx-auto my-auto col-span-full md:col-span-4 lg:col-span-4'>
          <Image
            src={`/icon/air_quality/${condition.replace(/ /g, '-')}.svg`}
            height={98}
            width={98}
            alt={'icons'}
          />
        </div>
        <BannerInformation condition={condition} />
      </div>
      <div className='py-2 px-4 text-slate-600 font-semibold'>
        <h3 className='text-lg font-sora'>
          Overview{' '}
          <span className='text-xs italic text-slate-500 font-manrope'>
            (comparison of today with yesterday)
          </span>
        </h3>
        <BannerListItem
          title={'PM10'}
          value={data_result.pm10}
          symbol={' µg/m³'}
          compareData={data_yesterday.pm10}
        />
        <BannerListItem
          title={'CO2'}
          value={data_result.co2}
          symbol={' ppm'}
          compareData={data_yesterday.co2}
        />
        <BannerListItem
          title={'Temperature'}
          value={data_result.temperature}
          symbol={'°C'}
          compareData={data_yesterday.temperature}
        />
        <BannerListItem
          title={'Humidity'}
          value={data_result.humidity}
          symbol={'%'}
          compareData={data_yesterday.humidity}
        />
      </div>
    </div>
  );
}
