import { useState } from 'react';
import { Link } from 'react-scroll';

import { useMediaQuery } from '../../hooks/index';
import Logo from '../Logo';

import styles from '../../styles/Header.module.scss';
import stylesMenu from '../../styles/MobileMenu.module.scss';

const NAVIGATION = [
  // { id: 1, title: 'Головна', path: '/' },
  { id: 1, title: 'Про мене', path: '/about' },
  { id: 2, title: 'Навички', path: '/skills' },
  { id: 3, title: 'Портфоліо', path: '/portfolio' },
  { id: 4, title: "Зв'язатися зі мною", path: '/contact' },
];

const Header = () => {
  const isMobile = useMediaQuery(700);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.item;

  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  const handleToggleMenu = () => {
      (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden');
      setMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
      (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden');
      setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile && (
          <button
            onClick={handleToggleMenu}
            className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}>
            <span />
            <span />
            <span />
          </button>
        )}
        <nav className={`${isMobile ? stylesMenu.menu : styles.nav} ${menuOpen ? stylesMenu.open : ''}`}>
          <ul className={`${isMobile ? styles.list_reset : styles.list}`}>
            {NAVIGATION.map((item) => (
              <li className={currentMenuItemClass} key={item.id}>
                <Link
                  href='/'
                  to='about'
                  spy={spy}              
                  smooth={smooth}
                  offset={offset}
                  duration={duration}
                  onClick={closeMenu}
                  >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
