import { QUERIES } from '../../constants';
import styles from './Card.module.scss';

const Card = ({ imageSource, text, id }) => {
  return (
    <button className={styles.card_wrapper} aria-labelledby={`card${id}`}>
      <picture>
        <source srcSet={imageSource.mobile} media={QUERIES.mobile} />
        <source srcSet={imageSource.desktop} media={QUERIES.desktop} />
        <img src={QUERIES.mobile} alt="" />
      </picture>

      <div className={styles.top_layer}>
        <h3 id={`card${id}`} className={styles.text}>
          {text}
        </h3>
      </div>
    </button>
  );
};

export default Card;
