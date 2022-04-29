import styles from "./filter.module.scss";
import { useRef, useState } from "react";

const Filter = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const priceRange = useRef();
  let setMaxPrice;

  const priceHandler = (e) => {
    const priceRangeVal = priceRange.current.value;
    clearTimeout(setMaxPrice);
    setMaxPrice = setTimeout(() => props.priceHandler(priceRangeVal), 500);
  };

  const sortHandler = (e) => {
    props.sortProductsHandler(e.target.innerText);
    setDropdown(false);
  };

  const dropdownHandler = () => {
    setDropdown((x) => !x);
  };

  const filterHandler = () => {
    setFilterDropdown((x) => !x);
  };


  return (
    <div className={styles.filterContainer}>
      <div className={styles.title} onClick={filterHandler}>
        <p>Filters {filterDropdown ? <span>&#9650;</span> : <span>&#9660;</span>}</p> 
      </div>
      <div className={filterDropdown ? '' : styles.showFilters}>
        <div className={styles.filterItem}>
          <p>Price range</p>
          <div className={styles.sliderContainer}>
            <div>£0</div>
            <div>
              <input
                key={Math.random()}
                type="range"
                min="0"
                max={props.initialPrice}
                defaultValue={props.selectedPrice}
                ref={priceRange}
                onChange={priceHandler}
              />
            </div>
            <div>£{props.selectedPrice}</div>
          </div>
        </div>
        <hr />
        <div className={styles.filterItem}>
          <p>Sort Price</p>
          <div className={styles.sortContainer} onClick={dropdownHandler}>
            {props.sort}{dropdown ? <span> &#9650;</span> : <span> &#9660;</span>}
          </div>
          <div className={`${styles.sortDropdown} ${dropdown && styles.show}`}>
            <div className={styles.sortItem} onClick={sortHandler}>
              Default
            </div>
            <hr />
            <div className={styles.sortItem} onClick={sortHandler}>
              <p>Price low to high</p>
            </div>
            <hr />
            <div className={styles.sortItem} onClick={sortHandler}>
              <p>Price high to low</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
