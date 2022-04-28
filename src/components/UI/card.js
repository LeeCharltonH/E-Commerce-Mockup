import styles from "./card.module.scss";

export const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardItem}>{props.children}</div>
    </div>
  );
};
