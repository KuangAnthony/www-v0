import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { Gradient } from '@lib/gradient';

const Home: NextPage = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('.gradient');
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Anthony Kuang personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='h-108'>
        <canvas className='gradient' data-js-darken-top data-transition-in />
      </div>
    </>
  );
};

export default Home;
