import MainTitle from './MainTitle';

import ArrowSvg from './ArrowSvg';
import SocialList from './SocialList';
import { useMediaQuery } from '../hooks';

import styles from '../styles/About.module.scss';

const About = () => {
  const isMobile1080 = useMediaQuery(1080);

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <MainTitle text="Про мене" />
      </div>
      <div className={`sub-container ${styles.about__sub_container}`}>
        <div className={styles.about__img}>
          <img src="img/Serhii_Svit.png" alt="avatar" />
        </div>
        <div className={styles.about__inner}>
          <h3 className={styles.about__title}>
            Сергій Світличний
            <span className={styles.title__border}>
              <span className={styles.title__arrow}>
                <ArrowSvg />
              </span>
              <span className={styles.title__line} />
            </span>
          </h3>
          <p className={styles.about__text}>
            На даний час працюю провідним інженером-технологом філії УкрНДІгаз
            АТ «Укргазвидобування», але хочу опанувати різні веб-технології, щоб
            стати веб розробником, тому я і шукаю допоміжну роботу для
            покращення своїх навичок в якості веб-розробника.
          </p>
          {!isMobile1080 && <SocialList />}
        </div>
      </div>
      <div className="sub-container">{isMobile1080 && <SocialList />}</div>
    </section>
  );
};

export default About;
