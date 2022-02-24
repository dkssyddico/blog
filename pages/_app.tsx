import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dkssyddico Blog</title>
      </Head>
      <div>
        <Navbar />
        <main className='min-h-screen px-60 py-10'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
