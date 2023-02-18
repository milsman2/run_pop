import type { NextPageWithLayout } from './_app';
import { Layout } from '@/components/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col flex-1 items-center justify-evenly bg-black text-slate-300">
      Welcome to Run Pop!
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
