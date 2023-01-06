import MainTitle from './MainTitle';

import styles from '../styles/Skills.module.scss';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <MainTitle text="Навички" />
      </div>
      <div className={`sub-container ${styles.skills__sub_container}`}></div>
    </section>
  );
}

export default Skills;