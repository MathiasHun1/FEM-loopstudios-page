import styles from './Footer.module.scss';

import fbLogo from '../../assets/icon-facebook.svg';
import instaLogo from '../../assets/icon-instagram.svg';
import pinterestLogo from '../../assets/icon-pinterest.svg';
import twitterLogo from '../../assets/icon-twitter.svg';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner_wrapper}>
        <div className={styles.nav_wrapper}>
          <Logo />
          <Navbar visibility="always-visible" color="white" />
        </div>
        <div className={styles.logos_wrapper}>
          <div className={styles.social_logos}>
            <div role="link" className={styles.social_icon}>
              <img src={fbLogo} alt="link for facebook" />
            </div>
            <div role="link" className={styles.social_icon}>
              <img src={instaLogo} alt="link for instagram" />
            </div>
            <div role="link" className={styles.social_icon}>
              <img src={pinterestLogo} alt="link for pinterest" />
            </div>
            <div role="link" className={styles.social_icon}>
              <img src={twitterLogo} alt="link for twitter" />
            </div>
          </div>
          <p className={styles.footer_text}>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
