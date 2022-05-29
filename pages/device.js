import Layout from '../components/Layout';
import ListView from '../components/partials/ListView';

export default function device({ devices }) {
  return (
    <Layout title={'Airly | Device'}>
      <ListView listItem={devices} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST_NAME}/api/device`);

  if (res.status == 200) {
    const results = await res.json();
    const devices = results.data;

    return {
      props: {
        devices,
      },
      revalidate: 30, // In seconds
    };
  }
}
