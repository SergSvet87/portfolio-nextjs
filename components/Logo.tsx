import Link from 'next/link';

import styles from '../styles/Logo.module.scss';

const Logo = ({
  marginBottom,
  width,
  height,
}: {
  marginBottom?: number,
  width?: number,
  height?: number,
}) => {
  return (
    <Link href="/">
      <img
        src="/img/logo.png"
        alt="logo"
        className={styles.logo}
        style={{ marginBottom, width, height }}
      />
    </Link>
  );
};

export default Logo;
