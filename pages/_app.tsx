import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';

import Layout from '../components/Layout/Layout';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </>
  );
}
