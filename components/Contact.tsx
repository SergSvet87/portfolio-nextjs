import MainTitle from './MainTitle';

import styles from '../styles/Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <MainTitle text="Зворотній зв'язок" />
      </div>
      <div className={styles.contact__inner}></div>
    </section>
  );
};

export default Contact;
