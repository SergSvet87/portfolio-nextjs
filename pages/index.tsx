import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Next App</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Application for finding movies to your taste"
        />
        <meta name="author" content="Serhii Svitlychnyi" />
        <meta
          name="keywords"
          content="html, css, javascript, react, next.js, frontend, portfolio, about, svitlychnyi, serhii"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
        <div className="background-animation">
          <div id="ball-one"></div>
          <div id="ball-two"></div>
          <div id="ball-three"></div>
        </div>
    </>
  );
}
