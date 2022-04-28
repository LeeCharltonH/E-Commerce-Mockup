import styles from "./nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "../UI/badge";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const data = props.data;
  const basket = useSelector((state) => state.basketReducer);
  const modalHandler = props.modal;
  const bagIcon = (
    <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
  );
  const itemCount = basket.basket.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.quantity;
  }, 0);

  const categories = data.reduce((cats, item) => {
    if (cats.indexOf(item.category) > -1) {
      return [...cats];
    } else {
      return [item.category, ...cats];
    }
  }, []);

  const navHandler = () => {
    setMobileNav((prevState) => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <div
        className={`${styles.navicon3} ${styles.mobileNav} ${
          mobileNav && styles.open
        }`}
        onClick={navHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={mobileNav ? `${styles.show}` : ""}>
        {categories.map((item) => {
          const url = item.replace("'", "").replace(" ", "-");
          return (
            <Link to={`/${url}`} key={Math.random()}>
              <li onClick={() => setMobileNav(false)}>{item}</li>
            </Link>
          );
        })}
      </ul>
      <div className={styles.cart} onClick={modalHandler}>
        Basket {bagIcon} <Badge>{itemCount}</Badge>
      </div>
    </nav>
  );
};

export default Nav;
