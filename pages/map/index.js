import dynamic from 'next/dynamic';

function map() {
  const Map = dynamic(
    () => import('../../components/Maps'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return <Map />;
}

export default map;

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.HOST_NAME}/api/geojson`);

//   if (res.status == 200) {
//     const results = await res.json();
//     const geoData = results.data;

//     return {
//       props: {
//         geoData,
//       },
//     };
//   }
// }
