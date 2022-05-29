import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import Purpose from '../components/Purpose';

export default function Home() {
  return (
    <Layout title={'Airly | Overview'}>
      <Hero />
      <Purpose />
      <Feature />
    </Layout>
  );
}
