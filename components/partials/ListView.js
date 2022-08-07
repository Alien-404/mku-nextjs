import ListItem from './ListItem';

export default function ListView({ listItem }) {
  return (
    <section className='bg-secondary h-full'>
      <div className='px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
        <div className='items-end justify-between sm:flex'>
          <div className='max-w-xl'>
            <h2 className='text-4xl font-bold tracking-tight sm:text-5xl font-sora'>
              Our list device deploy on street
            </h2>
            <p className='max-w-lg mt-8 text-gray-900 font-manrope text-justify'>
              Device is a combination of several sensors that are assembled in
              such a concise manner that one device includes all the parameters
              you want to monitor. This page contains a list of devices
              scattered in the Kalipaten village area along with the status of
              the device itself, whether it is active or not. Each device also
              has a specific location description of each.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3'>
          {listItem &&
            listItem.map((item, index) => {
              return <ListItem key={index} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
}
