import styles from './Logo.module.scss';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
