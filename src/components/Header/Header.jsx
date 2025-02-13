import styles from './Header.module.scss';
import { QUERIES } from '../../constants';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';

import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <picture className={styles.image_container}>
        <source srcSet="/images/mobile/image-hero.jpg" media={QUERIES.mobile} />
        <source srcSet="/images/desktop/image-hero.jpg" media={QUERIES.desktop} />
        <img className={styles.hero} src="/images/mobile/image-hero.jpg" alt="" />
      </picture>

      <div className={styles.header_layer}>
        <div className={styles.navbar_wrapper}>
          <Logo />
          <Navbar />
          <div className={styles.nav_mobile_icon}>
            <img src={hamburger} alt="" />
          </div>
        </div>

        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
