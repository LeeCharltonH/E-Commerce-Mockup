import styles from './card.module.scss';

export const Card = props => {
    return <div className={styles.cardContainer}>{props.children}</div>
}