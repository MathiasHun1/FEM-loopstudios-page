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
            <div>
              <img src={fbLogo} alt="" />
            </div>
            <div>
              <img src={instaLogo} alt="" />
            </div>
            <div>
              <img src={pinterestLogo} alt="" />
            </div>
            <div>
              <img src={twitterLogo} alt="" />
            </div>
          </div>
          <p className={styles.footer_text}>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
