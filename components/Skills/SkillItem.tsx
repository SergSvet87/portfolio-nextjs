import { FLIGHT_MANIFEST } from 'next/dist/shared/lib/constants';
import styles from '../../styles/SkillItem.module.scss';

const skills = [
  {
    _id: 1,
    title: 'Веб-Розробка',
    text: 'Javascript, PHP, Node.js, Webpack, PHPMyAdmin, MySQL, PostgreSQL, Visual Studio Code, Open Server.',
    iconClass: 'icon/icon-web.svg',
  },
  {
    _id: 2,
    title: 'UI/UX Дизайн',
    text: 'Figma, Adobe XD, Photoshop, Illustrator, Sketch.',
    iconClass: 'icon/icon-ux.svg',
  },
  {
    _id: 3,
    title: 'Розробка Frontend',
    text: 'HTML, CSS, SCSS, SASS, Bootstrap, Wordpress, React, Redux, Next.js, Angular.js.',
    iconClass: 'icon/icon-front.svg',
  },
  {
    _id: 4,
    title: 'Консалтинг та SEO-Аудит',
    text: 'Google Firebase.',
    iconClass: 'icon/icon-seo.svg',
  },
];

const SkillItem = () => {
  return (
    <ul className={styles.skills__list}>
      {skills.map((skill) => (
        <li className={`${styles.skill} 'skill'`} key={skill._id}>
          <div className={styles.skill__title}>
            <img src={skill.iconClass} alt={skill.title} />
            <h3 className={styles.skill__title_h3}>{skill.title}</h3>
          </div>

          <span className={styles.skill__title_border} />

          <p className={styles.skill__text}>{skill.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default SkillItem;
