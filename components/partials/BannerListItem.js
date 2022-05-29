export default function BannerListItem({
  title,
  value,
  symbol,
  icon,
  iconColor,
}) {
  return (
    <div className='flex py-2 bg-slate-200 px-2 my-2 text-base items-center justify-center rounded'>
      <h2 className='px-1'>{title}</h2>
      <p className='ml-auto mx-4'>
        <span className='font-bold'>{value}</span>
        {symbol}
      </p>
      <span className={`bg-${iconColor}-500 px-1.5 py-1 rounded`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='white'
          strokeWidth={2}
        >
          {icon == 'down' ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17 13l-5 5m0 0l-5-5m5 5V6'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M7 11l5-5m0 0l5 5m-5-5v12'
            />
          )}
        </svg>
      </span>
    </div>
  );
}
