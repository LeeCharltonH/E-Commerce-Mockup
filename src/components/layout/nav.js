import styles from "./nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "../UI/badge";
import { useSelector } from "react-redux";

const Nav = (props) => {
  const basket = useSelector((state) => state.basketReducer);
  const modalHandler = props.modal;
  const bagIcon = (
    <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
  );
  const itemCount = basket.basket.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.quantity
  }, 0);

  return (
    <nav className={styles.nav}>
      <div className={styles.cart} onClick={modalHandler}>
        Basket {bagIcon} <Badge>{itemCount}</Badge>
      </div>
    </nav>
  );
};

export default Nav;
