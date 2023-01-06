import Link from 'next/link';

import styles from '../styles/Logo.module.scss';

const Logo = ({ marginBottom }: { marginBottom?: number }) => {
  return (
    <Link href='/'>
      <img src="/img/logo.png" alt="logo" className={styles.logo} style={{marginBottom}} />
    </Link>
  );
};

export default Logo;
