import styles from "./nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "../UI/badge";
import { useSelector } from "react-redux";
import { useState } from "react";

const Nav = (props) => {
  const [category, setCategory] = useState('');
  console.log(category)
  const data = props.data;
  const basket = useSelector((state) => state.basketReducer);
  const modalHandler = props.modal;
  const bagIcon = (
    <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
  );
  const itemCount = basket.basket.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.quantity
  }, 0);

  const categoryHandler = (e) => {
    const innerHTML = e.target.innerHTML;
    const category = innerHTML.replace("'", '').replace(" ", "-");
    setCategory(category);
  }

  const categories = data.reduce((cats, item) => {
    if (cats.indexOf(item.category) > -1) {
      return [...cats];
    } else {
      return [item.category, ...cats];
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        {categories.map(item => {return <li key={Math.random()} onClick={categoryHandler}>{item}</li>})}
      </ul>
      <div className={styles.cart} onClick={modalHandler}>
        Basket {bagIcon} <Badge>{itemCount}</Badge>
      </div>
    </nav>
  );
};

export default Nav;
