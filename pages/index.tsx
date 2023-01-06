import Head from 'next/head';

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio Next App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
    </>
  );
};

export default Home;
