import MainTitle from '../MainTitle';
import { useMediaQuery } from '../../hooks';
import ArrowSvg from '../ArrowSvg';
import SocialList from '../SocialList';
import ContactForm from './ContactForm';

import styles from '../../styles/Contact.module.scss';

const Contact = () => {
  const isMobile485 = useMediaQuery(485);

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <MainTitle text="Зворотній зв'язок" />
      </div>
      <div className="sub-container">
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <p className={styles.contact__text}>
              Ви працюєте над чимось великим? Я із задоволенням допоможу вам у
              це! Напишіть мені листа і ми почнемо проект прямо зараз!
            </p>
            <p className={styles.contact__text}>Просто зробіть це</p>
            {!isMobile485 && (
              <>
                <h3 className={styles.contact__title}>
                  <span className={styles.contact__title__text}>
                    Я в соцмережах:
                  </span>
                  <span className={styles.contact__title__arrow}>
                    <ArrowSvg />
                  </span>
                  <span className={styles.contact__title__border} />
                </h3>
                <SocialList />
              </>
            )}
          </div>

          <div className={styles.contact__right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
