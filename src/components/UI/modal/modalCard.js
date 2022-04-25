import styles from "./modalCard.module.scss";
import { Button } from "../button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { basketActions } from "../../../store";

const ModalCard = (props) => {
  const [checkout, setCheckout] = useState(false);
  const basket = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();
  
  const checkoutMessage = () => {
    setCheckout(true);
    setTimeout(() => setCheckout(false), 2000);
  };

  let products = basket.basket.map((item) => {
    const increaseQuantity = () => {
      dispatch(basketActions.addItem({item: item}))
    }

    const decreaseQuantity = () => {
      dispatch(basketActions.removeItem({item: item}))
    }

    return (
      <div key={`${item.id}_${Math.random()}`}>
        <div>
          <img src={item.image} width="100" />
        </div>
        <div>
          {item.title}
          <br />
          {`£${item.price * item.quantity}`}
        </div>
        <div>
          <button className={styles.quantityBtn} onClick={decreaseQuantity}>-</button>
          {item.quantity}
          <button className={styles.quantityBtn} onClick={increaseQuantity}>+</button>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.modalCard}>
      <button onClick={props.modal} className={styles.modalButton}>
        Close
      </button>
      <h2>Basket</h2>
      <div>{products}</div>
      <Button onClick={checkoutMessage}>
        Buy Now
        {checkout && (
          <span className={styles.basketBtn}>
            Site built for demo pursposes. Checkout page unavailable
          </span>
        )}
      </Button>
    </div>
  );
};

export default ModalCard;
