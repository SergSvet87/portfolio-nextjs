import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import PolicyContent from '../../components/PolicyContent';

export default function PersonalDataPolicy() {
  return (
    <>
      <Head>
        <title>Portfolio | Personal data policy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PolicyContent />

      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
    </>
  );
}
