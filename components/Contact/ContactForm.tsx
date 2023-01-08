import { MutableRefObject, useRef, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { PropagateLoader } from 'react-spinners';

import ContactInput from './ContactInput';

import styles from '../../styles/Contact.module.scss';

const ContactForm = () => {
  const [acceptWithRules, setAcceptWithRules] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSpinner(true);
    emailjs
      .sendForm(
        'service_q05aldx',
        'template_ij11wez',
        formRef.current,
        'BxAJgT2swoU2gZXFg'
      )
      .then(
        (result) => {
          setSpinner(false);
          toast(`Дані успішно відправлені ${result.text}`);
        },
        (error) => {
          setSpinner(false);
          toast.error(`Данні не відправлені ${error.text}`);
        }
      );

    formRef.current.reset();
    setAcceptWithRules(false);
  };

  return (
    <form onSubmit={sendEmail} className={styles.contact__form} ref={formRef}>
      <ContactInput
        text="Ф.І.Б.*"
        placeholder="Вкажіть ваші Ф.І.Б."
        type="text"
        name="fullName"
      />
      <ContactInput
        text="Посада/компанія"
        placeholder="Вкажіть вашу посаду/компанію"
        type="text"
        name="company"
      />
      <ContactInput
        text="E-mail*"
        placeholder="Вкажіть ваш E-mail"
        type="email"
        name="email"
      />
      <ContactInput
        text="Телефон*"
        placeholder="Вкажіть ваш телефон"
        type="tel"
        name="phone"
      />
      <button className={styles.contact__form__btn} disabled={!acceptWithRules}>
        {spinner ? <PropagateLoader color="#fff" /> : 'Відправити замовлення'}
      </button>
      <label className={styles.contact__checkbox}>
        <input
          className={styles.contact__checkbox__input}
          type="checkbox"
          onChange={toggleAcceptWithRules}
        />
        <span className={styles.contact__checkbox__span} />
        <span className={styles.contact__checkbox__text}>
          Натиснувши на кнопку «Відправити замовлення», я погоджуюся з
          <Link href="/privacy-policy" passHref legacyBehavior>
            <a className={styles.contact__checkbox__link}>
              {' '}
              Політикой конфіденційності
            </a>
          </Link>
          та даю
          <Link legacyBehavior href="/personal-data-of-clients" passHref>
            <a className={styles.contact__checkbox__link}>
              {' '}
              Згоду на обробку персональних даних.
            </a>
          </Link>
        </span>
      </label>
    </form>
  );
};

export default ContactForm;
