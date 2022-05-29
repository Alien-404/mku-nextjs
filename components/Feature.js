import ButtonFill from "./partials/ButtonFill";

export default function Feature() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col lg:flex-row'>
        <div className='max-w-xl pr-16 mx-auto mb-10'>
          <h5 className='mb-6 text-3xl font-bold leading-none'>
            Sensors built into the device for air quality monitoring
          </h5>
          <p className='mb-6 text-gray-900'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
            omnis iste natus.
          </p>
          <div className='flex items-center'>
            <ButtonFill title={'Discover'} link={'/device'} />
          </div>
        </div>
        <div className='grid gap-5 row-gap-5 sm:grid-cols-2'>
          <div className='max-w-md'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>PM10</h6>
            <p className='text-sm text-gray-700'>
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear. I didnt even know we were calling him Big
              Bear.
            </p>
          </div>
          <div className='max-w-md'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>CO2</h6>
            <p className='text-sm text-gray-700'>
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea robin Antarctic cod. Yellow-and-black
              triplefin.
            </p>
          </div>
          <div className='max-w-md'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Temperature</h6>
            <p className='text-sm text-gray-700'>
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker. Meanwhile, in behind the bicycle shed,
              Hercules.
            </p>
          </div>
          <div className='max-w-md'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Humidity</h6>
            <p className='text-sm text-gray-700'>
              Disrupt inspire and think tank, social entrepreneur but
              preliminary thinking think tank compelling. Inspiring, invest
              synergy capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
