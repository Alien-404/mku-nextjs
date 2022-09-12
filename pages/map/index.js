import dynamic from 'next/dynamic';

function map({ geoData }) {
  const Map = dynamic(
    () => import('../../src/components/Maps'), //  '@components/map' location
    { ssr: false } // It's what prevents server-side render
  );
  return <Map geoData={geoData} />;
}

export default map;

// fetch data with staticProps
export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST_NAME}/api/geojson`);

  if (res.status == 200) {
    const results = await res.json();
    const geoData = results.data;

    return {
      props: {
        geoData,
      },
      revalidate: 60, // In seconds
    };
  }
}
