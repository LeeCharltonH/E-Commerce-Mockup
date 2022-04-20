import styles from "./modalCard.module.scss";
import { Button } from "../button";
import { useState } from "react";

const ModalCard = (props) => {
  const [checkout, setCheckout] = useState(false);

  const checkoutMessage = () => {
    setCheckout(true)
    setTimeout(() => setCheckout(false), 2000)
  }

  return (
    <div className={styles.modalCard}>
        <button onClick={props.modal} className={styles.modalButton}>Close</button>
        <h2>Basket</h2>
        <Button onClick={checkoutMessage} >Buy Now{checkout && <span className={styles.basketBtn}>Site built for demo pursposes. Checkout page unavailable</span>}</Button>
    </div>
  );
};

export default ModalCard;
