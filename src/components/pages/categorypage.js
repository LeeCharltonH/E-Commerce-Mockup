import styles from "./categorypage.module.scss";
import ProductCard from "../products/productCard";
import Filter from "../UI/filter";
import { useState, useEffect } from "react";

const CategoryPage = (props) => {
  const maxPrice = props.data
    .filter((item) => item.category === props.category)
    .sort((a, b) => b.price - a.price);
  

  const [price, setPrice] = useState(Math.ceil(maxPrice[0].price));
  const [sortProducts, setSortProducts] = useState("Default");

  useEffect(() => setPrice(Math.ceil(maxPrice[0].price)), [props.category]);

  const category = props.data
    .filter((item) => item.category === props.category)
    .filter((item) => item.price <= price)
    .sort((a, b) => {
      if (sortProducts === "Default") {
        return;
      } else if (sortProducts === "Price low to high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  let products = category.map((item) => {
    return <ProductCard data={item} key={item.id} />;
  });

  const priceHandler = (x) => setPrice(x);
  const sortProductsHandler = (x) => setSortProducts(x);

  return (
    <div className={styles.categoryContainer}>
      <h2>{props.h2}</h2>
      <div className={styles.categoryItems}>
        <Filter
          initialPrice={Math.ceil(maxPrice[0].price)}
          selectedPrice={price}
          priceHandler={priceHandler}
          sortProductsHandler={sortProductsHandler}
          sort={sortProducts}
        />

        <div className={styles.productContainer}>
          {props.data.length < 1 ? "Is Loading" : products}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
