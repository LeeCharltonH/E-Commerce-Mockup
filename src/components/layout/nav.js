import styles from "./nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "../UI/badge";

const Nav = (props) => {
  const modalHandler = props.modal;
  const bagIcon = (
    <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
  );

  return (
    <nav className={styles.nav}>
      <div className={styles.cart} onClick={modalHandler}>
        Basket {bagIcon} <Badge>1</Badge>
      </div>
    </nav>
  );
};

export default Nav;
