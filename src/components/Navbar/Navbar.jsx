import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';

const Navbar = ({ visibility, color }) => {
  let inlineStyle = visibility === 'always-visible' ? { display: 'flex' } : {};

  if (color) {
    inlineStyle.color = color;
  }

  return (
    <nav className={styles.navbar} style={inlineStyle}>
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
  );
};

export default Navbar;
