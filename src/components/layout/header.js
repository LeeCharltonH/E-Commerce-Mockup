import styles from './header.module.scss';
import Nav from './nav';

const Header = (props) => {
    const data = props.data;

    return <header className={styles.header}>
        <h1>Nook Shop</h1>
        <Nav modal={props.modal} data={data} />
    </header>
}

export default Header;