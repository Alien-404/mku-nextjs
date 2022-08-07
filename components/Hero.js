import Image from 'next/image';
import ButtonFill from './partials/ButtonFill';

export default function Hero() {
  return (
    <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16'>
      <div className='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
        <div className='mb-2 lg:mb-0 lg:max-w-lg lg:pr-5'>
          <div className='max-w-xl mb-4'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6 font-manrope'>
              Kalipaten Village Air Quality Index Monitoring Report
            </h2>
            <p className='text-gray-800 text-sm font-light font-sora text-justify'>
              This website is an application that allows the measurement of
              several air quality parameters such as PM10, CO2, humidity, and
              temperature at several points in the Kalipaten village area. With
              this application, it is hoped that the local community can use it
              as a medium to determine the air quality in the area where they
              live.
            </p>
            <ButtonFill title={'Go to map'} link={'/map'} />
          </div>
        </div>
        <div className='flex items-center justify-center lg:w-1/2'>
          <div className='w-full'>
            <Image
              src={'/image/hero-image.png'}
              alt='image-hero'
              height={335}
              width={552}
              objectFit='cover'
              className='rounded lg:rounded-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
