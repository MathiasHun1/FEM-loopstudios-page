import { QUERIES } from '../../constants';
import styles from './Card.module.scss';

const Card = ({ imageSource, text }) => {
  return (
    <div className={styles.card_wrapper}>
      <picture>
        <source srcSet={imageSource.mobile} media={QUERIES.mobile} />
        <source srcSet={imageSource.desktop} media={QUERIES.desktop} />
        <img src={QUERIES.mobile} alt="" />
      </picture>

      <div className={styles.top_layer}>
        <h3 className={styles.text}>{text}</h3>
      </div>
    </div>
  );
};

export default Card;
