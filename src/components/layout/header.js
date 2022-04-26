import styles from "./header.module.scss";
import Nav from "./nav";
import { Link } from "react-router-dom";

const Header = (props) => {
  const data = props.data;

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Nook Shop</h1>
      </Link>
      <Nav modal={props.modal} data={data} />
    </header>
  );
};

export default Header;
