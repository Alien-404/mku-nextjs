import Image from 'next/image';
import ButtonFill from './partials/ButtonFill';

export default function Hero() {
  return (
    <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16'>
      <div className='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
        <div className='mb-2 lg:mb-0 lg:max-w-lg lg:pr-5'>
          <div className='max-w-xl mb-4'>
            <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6'>
              Indonesia Air quality index monitoring report
            </h2>
            <p className='text-gray-700 text-base md:text-lg'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <ButtonFill title={'Discover'} link={'/map'} />
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
