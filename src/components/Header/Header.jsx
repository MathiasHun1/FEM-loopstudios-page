import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <picture className={styles.image_container}>
        <source srcSet="/images/mobile/image-hero.jpg" media="(max-width: 600px)" />
        <source srcSet="/images/desktop/image-hero.jpg" />
        <img className={styles.hero} src="/images/mobile/image-hero.jpg" alt="" />
      </picture>

      <div className={styles.header_layer}>
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_wrapper}>
            <img src={logo} alt="" />
          </div>
          <nav className={styles.navbar}>
            <div className={styles.nav_link_wrapper}>
              <p className={styles.nav_link}>About</p>
              <div className={styles.nav_link_decorator}></div>
            </div>

            <div className={styles.nav_link_wrapper}>
              <p className={styles.nav_link}>Carreers</p>
              <div className={styles.nav_link_decorator}></div>
            </div>

            <div className={styles.nav_link_wrapper}>
              <p className={styles.nav_link}>Events</p>
              <div className={styles.nav_link_decorator}></div>
            </div>

            <div className={styles.nav_link_wrapper}>
              <p className={styles.nav_link}>Products</p>
              <div className={styles.nav_link_decorator}></div>
            </div>

            <div className={styles.nav_link_wrapper}>
              <p className={styles.nav_link}>Support</p>
              <div className={styles.nav_link_decorator}></div>
            </div>
          </nav>

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
