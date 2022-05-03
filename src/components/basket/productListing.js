import styles from "./productListing.module.scss";

const ProductListing = (props) => {
  const item = props.data;
  const increase = props.increaseHandler;
  const decrease = props.decreaseHandler;
  const count = props.count;
  const totalPrice = (item.price * item.quantity);

  return (
    <div className={styles.productContainer}>
      <div>
        <img src={item.image} width="100" alt={item.title} />
      </div>
      <div className={styles.productDetails}>
        <p>
          {item.title}
        </p>
        <p className={styles.bold}>
          {`£${totalPrice.toFixed(2)}`}
        </p>
        <div>
          <button className={styles.quantityBtn} onClick={decrease}>
            -
          </button>
          {item.quantity}
          <button
            className={
              count
                ? `${styles.quantityBtn} ${styles.maxCount}`
                : `${styles.quantityBtn}`
            }
            onClick={increase}
            disabled={count}
          >
            +
          </button>
          {count && <p>Max 5 items allowed</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
