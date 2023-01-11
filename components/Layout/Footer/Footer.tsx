import Link from 'next/link';

import Logo from '../../Logo';
import SocialList from './SocialList';
import { useMediaQuery } from '../../../hooks/index';
import styles from '../../../styles/Footer.module.scss';

const Footer = () => {
  const isMobile860 = useMediaQuery(860);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <span className={styles.footer__border} />
        <div className={styles.footer__inner}>
          <div className={styles.footer__left}>
            {isMobile860 && <SocialList />}
            <Logo marginBottom={30} width={120} height={40} />
            <p className={styles.footer__copyright}>
              &copy; {new Date().getFullYear()} «Serhii»
            </p>
          </div>
          <div className={styles.footer__right}>
            <div className={styles.footer__right__top}>
              <p className={styles.footer__right__top__text}>
                Поділитися сайтом з друзями:
              </p>
              {!isMobile860 && <SocialList />}
            </div>
            <div className={styles.footer__right__bottom}>
              <ul className={styles.footer__list}>
                <li className={styles.footer__list__item}>
                  <Link href="/cookie-policy" legacyBehavior>
                    Політика виконання файлів cookie
                  </Link>
                </li>
                <li className={styles.footer__list__item}>
                  <Link href="/privacy-policy" legacyBehavior>
                    Політика конфіденційності
                  </Link>
                </li>
                <li className={styles.footer__list__item}>
                  <Link href="/personal-data-policy" legacyBehavior>
                    Політика обробки персональних даних
                  </Link>
                </li>
                <li className={styles.footer__list__item}>
                  <Link href="/personal-data-of-clients" legacyBehavior>
                    Згода на обробку персональних даних клієнтів - фізичних осіб
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
