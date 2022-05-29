import Image from 'next/image';
import Link from 'next/link';
import _ from 'lodash';
import moment from 'moment';

export default function PopupLabel({ dataDevice }) {
  const { condition, location, data_result, device_id_path, created_at } =
    dataDevice.properties;

  return (
    <div className='max-w-md px-3 py-2 mx-auto rounded-lg text-slate-100 divide-y'>
      <div className='my-4 border-b-2'>
        <h3 className='text-base my-2 text-slate-500'>{location}</h3>
      </div>
      <div
        className={`flex justify-between space-x-6 bg-${condition.replace(
          / /g,
          '_'
        )} rounded-md p-2`}
      >
        <div className='flex flex-col items-center'>
          <Image
            src={`/icon/air_quality/${condition.replace(/ /g, '-')}.svg`}
            alt='icon_illustrate'
            height={46}
            width={46}
          />
        </div>
        <span className='font-bold text-base my-auto text-white'>
          {data_result.pm10} - {_.capitalize(condition)}
        </span>
      </div>
      <div className='flex justify-between mt-8 space-x-4 text-slate-400'>
        <div className='flex flex-col items-center space-y-1'>
          <span className='uppercase'>CO2</span>
          <Image
            src={'/icon/sensors/prime/co2.svg'}
            alt='co2_icon'
            height={24}
            width={24}
          />
          <span>{data_result.co2} ppm</span>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <span className='uppercase'>Temperature</span>
          <Image
            src={'/icon/sensors/prime/temperature.svg'}
            alt='co2_icon'
            height={24}
            width={24}
          />
          <span>{data_result.temperature}°</span>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <span className='uppercase'>Humidity</span>
          <Image
            src={'/icon/sensors/prime/humidity.svg'}
            alt='co2_icon'
            height={24}
            width={24}
          />
          <span>{data_result.humidity}%</span>
        </div>
      </div>
      <div className='my-4'>
        <h3 className='text-xs my-2 text-slate-400'>
          updated-at :{' '}
          <span className='tracking-tight'>
            {moment(created_at.seconds * 1000).format(
              'hh:mm a, MMM dddd Do YYYY'
            )}
          </span>
        </h3>
      </div>
      <div className='my-1 py-3'>
        <Link href={`/map/${device_id_path}`}>
          <button className='px-8 py-3 font-semibold border rounded border-gray-400 text-prime w-full hover:bg-prime hover:text-secondary'>
            more detail
          </button>
        </Link>
      </div>
    </div>
  );
}
