import styles from './badge.module.scss';

export const Badge = props => {
    return <div className={styles.badgeContainer}>{props.children}</div>
}