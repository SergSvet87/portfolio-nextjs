import MainTitle from './MainTitle';

import styles from '../styles/Portfolio.module.scss';

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text="Портфоліо" />
      </div>
      <div className={styles.portfolio__inner}></div>
    </section>
  );
};

export default Portfolio;
