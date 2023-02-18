import type { NextPageWithLayout } from './_app';
import { Layout } from '@/components/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col flex-1 items-center justify-evenly bg-black text-slate-300">
      <h1 className='text-3xl font-bold'>
        Welcome to Run Pop!
      </h1>
      <h1 className='text-lg'>The DevOps driven tracker of advanced metrics for Pops.</h1>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
