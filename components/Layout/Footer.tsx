import Link from 'next/link';
import Logo from '../Logo';
// import SocialList from './SocialList';
import { useMediaQuery } from '../../hooks/index';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  const isMobile725 = useMediaQuery(725);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <span className={styles.footer__border} />
        <div className={styles.footer__inner}>
          <div className={styles.footer__left}>
            {isMobile725}
            <Logo marginBottom={44} />
            <p className={styles.footer__copyright}>
              © 2023 <br />
              «Serhii»
            </p>
          </div>
          <div className={styles.footer__right}>
            <div className={styles.footer__right__top}>
              <p className={styles.footer__right__top__text}>
                Поділитися сайтом з друзями:
              </p>
              {!isMobile725}
            </div>
            <div className={styles.footer__right__bottom}>
              <ul className={styles.footer__list}>
                <li className={styles.footer__list__item}>
                  <Link href="/cookie-policy" legacyBehavior>
                    <a className={styles.footer__list__item__link}>
                      Політика викоиання файлів cookie
                    </a>
                  </Link>
                </li>
                <li className={styles.footer__list__item}>
                  <Link href="/privacy-policy" legacyBehavior>
                    <a className={styles.footer__list__item__link}>
                      Політика конфіденційності
                    </a>
                  </Link>
                </li>
                <li className={styles.footer__list__item}>
                  <Link href="/personal-data-policy" legacyBehavior>
                    <a className={styles.footer__list__item__link}>
                      Політика обробки персональних даних
                    </a>
                  </Link>
                </li>
                <li className={styles.footer__list__item}>
                  <Link href="/personal-data-of-clients" legacyBehavior>
                    <a className={styles.footer__list__item__link}>
                      Згода на обробку персональних даних клієнтів -
                      фізичних осіб
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
