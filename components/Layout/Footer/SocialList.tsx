import styles from '../../../styles/SocialListFooter.module.scss';

const icons = [
  {
    _id: 1,
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/serhii-svitlychnyi',
    path: 'social-icons/linkedin.svg',
    size: 20,
  },
  {
    _id: 2,
    name: 'telegram',
    href: 'https://t.me/Serg_svet',
    path: 'social-icons/telegram.svg',
    size: 20,
  },
  {
    _id: 3,
    name: 'gmail',
    href: 'mailto:svitlychnyi1905@gmail.com',
    path: 'social-icons/gmail.svg',
    size: 20,
  },
  {
    _id: 4,
    name: 'github',
    href: 'https://github.com/SergSvet87',
    path: 'social-icons/github.svg',
    size: 20,
  },
  {
    _id: 5,
    name: 'viber',
    href: 'viber://chat?number=%2B380976157541',
    path: 'social-icons/viber.svg',
    size: 20,
  },
];

const SocialList = () => {
  return (
    <ul className={styles.social}>
      {icons.map((icon) => (
        <li className={`${styles.social__item} item_social`} key={icon._id}>
          <a
            target="_blank"
            rel="noreferrer"
            href={icon.href}
            className={styles.item_social__link}>
            <span className={styles.item_social__text}>{icon.name}: </span>
            <span className={styles.item_social__icon}>
              <img
                src={icon.path}
                alt={icon.name}
                width={icon.size}
                height={icon.size}
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
