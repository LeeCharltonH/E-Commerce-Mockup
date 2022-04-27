import styles from "./filter.module.scss";
import { useRef, useState } from "react";

const Filter = (props) => {
  const priceRange = useRef();
  const sort = useRef();
  let setMaxPrice;

  const priceHandler = (e) => {
    const priceRangeVal = priceRange.current.value;
    clearTimeout(setMaxPrice);
    setMaxPrice = setTimeout(() => props.priceHandler(priceRangeVal), 500);
  };

  const sortHandler = (e) => {
    const sortVal = sort.current.value;
    props.sortProductsHandler(sortVal);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterItem}>
        Price range:
        <input
          type="range"
          min="0"
          max={props.price}
          defaultValue={props.price}
          ref={priceRange}
          onChange={priceHandler}
        />
        {props.price}
      </div>
      <hr />
      <div className={styles.filterItem}>
        Sort:
        <select onChange={sortHandler} ref={sort}>
          <option value="">Default</option>
          <option value="Price low to high">Price low to high</option>
          <option value="Price high to low">Price high to low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
