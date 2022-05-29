import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import BannerHead from '../../components/partials/BannerHead';
import Card from '../../components/partials/Card';
import GrafikLine from '../../components/partials/GrafikLine';

export default function DetailDevice() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout title={'Airly | Detail Device'}>
      <div className='px-8 py-6'>
        <h2 className='text-3xl font-bold pt-4'>Air quality in Kalipaten</h2>
        <p className='pb-4 text-sm'>
          <span className='font-semibold'>Last update at : </span>
          21:00, May 26
        </p>
        <div className='flex flex-col lg:flex-row'>
          <Card />
          <div>
            <BannerHead />
            <GrafikLine />
          </div>
        </div>
      </div>
    </Layout>
  );
}
