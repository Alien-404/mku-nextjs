import { Hero, Purpose, Feature } from '../src/components/';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <Layout title={'Overview | AirVision'}>
      <Hero />
      <Purpose />
      <Feature />
    </Layout>
  );
}
