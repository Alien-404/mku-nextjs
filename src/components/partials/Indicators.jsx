export default function Indicators() {
  return (
    <div className='absolute bottom-0 m-auto left-0 right-0 hidden md:block'>
      <div className='bg-prime h-fit w-fit text-secondary rounded-md m-auto mb-4'>
        <h3 className='text-sm text-center pb-1 font-sora'>Air Quality</h3>
        <div className='flex flex-row gap-3 px-2 pb-2 font-manrope'>
          <section className='flex flex-col justify-center items-center'>
            <div className='bg-good h-5 w-5 rounded-full' />
            <p className='text-sm whitespace-nowrap'>Good</p>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <div className='bg-moderate h-5 w-5 rounded-full' />
            <p className='text-sm'>Moderate</p>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <div className='bg-unhealthy h-5 w-5 rounded-full' />
            <p className='text-sm'>Unhealthy</p>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <div className='bg-very_unhealthy h-5 w-5 rounded-full' />
            <p className='text-sm'>Very Unhealthy</p>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <div className='bg-dangerous h-5 w-5 rounded-full' />
            <p className='text-sm'>Dangerous</p>
          </section>
        </div>
      </div>
    </div>
  );
}
