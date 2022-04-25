import styles from "./modalCard.module.scss";
import { Button } from "../button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { basketActions } from "../../../store";
import ProductListing from "../../basket/productListing";

const ModalCard = (props) => {
  const [checkout, setCheckout] = useState(false);
  const basket = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();
  const totalPrice = basket.basket.reduce(
    (prevVal, currentVal) => prevVal + currentVal.price * currentVal.quantity,
    0
  );

  const checkoutMessage = () => {
    setCheckout(true);
    setTimeout(() => setCheckout(false), 2000);
  };

  let products = basket.basket.map((item) => {
    const increaseQuantity = () => {
      dispatch(basketActions.addItem({ item: item }));
    };

    const decreaseQuantity = () => {
      dispatch(basketActions.removeItem({ item: item }));
    };

    const count = item.quantity == 5;

    return <ProductListing data={item} key={`${item.id}_${Math.random()}`} increaseHandler={increaseQuantity} decreaseHandler={decreaseQuantity} count={count} />;
  });

  return (
    <div className={styles.modalCard}>
      <button onClick={props.modal} className={styles.modalButton}>
        Close
      </button>
      <h2>Basket</h2>
      <div className={styles.productContainer}>{products}</div>
      {basket.basket.length < 1 ? (
        <p>{"No items added to basket"}</p>
      ) : (
        <p className={styles.bold}>{`Total price: £${totalPrice}`}</p>
      )}
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
