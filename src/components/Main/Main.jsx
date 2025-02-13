import { QUERIES } from '../../constants';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.article_section__wrapper}>
        <picture className={styles.picture}>
          <source srcSet="/images/mobile/image-interactive.jpg" media={QUERIES.mobile} />
          <source srcSet="/images/desktop/image-interactive.jpg" media={QUERIES.desktop} />
          <img className={styles.image} src="/images/mobile/image-interactive.jpg" alt="" />
        </picture>

        <article className={styles.article}>
          <h2 className={styles.article__sub_title}>The leader in interactive vr</h2>
          <p className={styles.article__text}>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best
            companies around the globe. Our award-winning creations have transformed businesses through digital
            experiences that bind to their brand.
          </p>
        </article>
      </section>

      <section className={styles.card_grid}></section>
    </main>
  );
};

export default Main;
